import { takeScreenshot } from './functions/takeScreenshot';
import * as zlib from 'zlib';
import { chromium } from 'playwright';
import { extractHeadingsWithText } from './functions/extractHeadingsWithText';
import { checkLinks } from './functions/checkLinks';
import { checkForXMLSitemap } from './functions/checkforXMLSitemap';
import { checkRobotsTxt } from './functions/checkRobotsTxt';
import { checkSSLCertificate } from './functions/checkSSLCertificate';
import { checkCustom404 } from './functions/checkCustom404';
import { checkDNSInfo } from './functions/checkDNS';
import { checkMetadata } from './functions/checkMetadata';
import { checkConsoleOutput } from './functions/checkConsoleOutput';
import { keywordAnalysis } from './functions/keywordAnalysis';
import { checkImageOptimization } from './functions/checkImageOptimization';
import { extractCompanyDataFromHtml } from './functions/companyData';

let completedTasks = 0;
const totalTasks = 26;

export async function GET(request: Request) {
  try {
    completedTasks = 0;
    const startTime = performance.now();
    const { searchParams } = new URL(request.url ?? '');
    let targetUrl = searchParams.get('url');

    if (!targetUrl) {
      return new Response('URL parameter is required', { status: 400 });
    }

    targetUrl = targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`;
    const dataObject = await fetchPageData(targetUrl);

    const endTime = performance.now();
    const executionTime = endTime - startTime;
    console.log(`API Execution Time: ${executionTime}ms`);

    const compressedData = await compressResponse(JSON.stringify(dataObject));

    return new Response(compressedData, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Content-Encoding': 'gzip'
      }
    });
  } catch (error) {
    console.error(error);
    return new Response('Internal server error', { status: 500 });
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchPageData = async (link: string): Promise<Record<string, any>> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: Record<string, any> = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const unsortedResult: Record<string, any> = {};
  const browser = await chromium.launch();
  const page = await browser.newPage();
  //const response = await page.goto(link);

  await page.goto(link); // Make sure to navigate to the page
  await page.waitForLoadState('load'); // Wait for the load state

  const domain = new URL(link).hostname;
  const content = await page.content();
  console.log(content);
  //const headers = response?.headers();

  const promises = [
    timeFunction('checkConsoleOutput', () =>
      checkConsoleOutput(page).catch((e) => ({ error: e.toString() }))
    ),
    timeFunction('checkCustom404', () =>
      checkCustom404(domain).catch((e) => ({ error: e.toString() }))
    ),
    timeFunction('checkDNS', () => checkDNSInfo(domain).catch((e) => ({ error: e.toString() }))),
    timeFunction('checkHeadings', () =>
      extractHeadingsWithText(content).catch((e) => ({ error: e.toString() }))
    ),
    timeFunction('checkImageOptimization', () =>
      checkImageOptimization(page).catch((e) => ({ error: e.toString() }))
    ),
    timeFunction('checkMetadata', () =>
      checkMetadata(content).catch((e) => ({ error: e.toString() }))
    ),
    timeFunction('checkRobotTxt', () =>
      checkRobotsTxt(domain).catch((e) => ({ error: e.toString() }))
    ),
    timeFunction('checkSSL', () =>
      checkSSLCertificate(domain).catch((e) => ({ error: e.toString() }))
    ),
    timeFunction('checkSitemap', () =>
      checkForXMLSitemap(domain).catch((e) => ({ error: e.toString() }))
    ),
    timeFunction('getAllLinks', () => checkLinks(page).catch((e) => ({ error: e.toString() }))),
    timeFunction('keywordAnalysis', () =>
      keywordAnalysis(content).catch((e) => ({ error: e.toString() }))
    ),
    timeFunction('takeScreenshot', () =>
      takeScreenshot(domain).catch((e) => ({ error: e.toString() }))
    ),
    timeFunction('companyData', () =>
      extractCompanyDataFromHtml(content).catch((e) => ({ error: e.toString() }))
    )
  ];

  const results = await Promise.all(promises);

  results.forEach((item) => {
    // Check if 'result' exists in the current item
    if ('result' in item) {
      unsortedResult[item.name] = item.result; // This should now work as expected.
    } else {
      // Handle the error case
      console.error(`Error in function ${item.name}: ${item.error}`);
    }
  });

  result['websiteData'] = Object.fromEntries(
    Object.entries(unsortedResult).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
  );

  await browser.close();
  return result;
};

async function compressResponse(data: string): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    zlib.gzip(data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

// Define a type that can hold either the result or an error object
type ResultOrError<T> =
  | { result: T; executionTime: number }
  | { error: string; executionTime: number };

async function timeFunction<T>(
  name: string,
  func: () => Promise<T>
): Promise<{ name: string } & ResultOrError<T>> {
  // Use the defined type with an intersection type for 'name'
  console.log(`Function Name: ${name}`);
  try {
    const startTime = performance.now();
    const result = await func();
    completedTasks++;
    updateProgress();
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    console.log(`${name} Execution Time: ${executionTime}ms`);
    // Return the success state
    return { name, result, executionTime };
  } catch (error) {
    console.error(`${name} Error: ${error}`);
    completedTasks++;
    updateProgress();
    // Return the error state
    return { name, error: error.toString(), executionTime: 0 };
  }
}

function updateProgress() {
  if (completedTasks <= totalTasks) {
    const progress = (completedTasks / totalTasks) * 100;
    console.log(`Progress: ${progress.toFixed(2)}%`);
  }
}
