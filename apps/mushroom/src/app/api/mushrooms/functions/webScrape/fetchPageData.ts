import * as zlib from 'zlib';
import { chromium } from 'playwright';
import { extractHeadingsWithText } from './extractHeadingsWithText';
import { checkLinks } from './checkLinks';
import { checkDNSInfo } from './checkDNS';
import { checkMetadata } from './checkMetadata';
import { keywordAnalysis } from './keywordAnalysis';

let completedTasks = 0;
const totalTasks = 26;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchPageData = async (link: string): Promise<Record<string, any>> => {
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
  //console.log(content);
  //const headers = response?.headers();

  const promises = [
    timeFunction('checkDNS', () => checkDNSInfo(domain).catch((e) => ({ error: e.toString() }))),
    timeFunction('checkHeadings', () =>
      extractHeadingsWithText(content).catch((e) => ({ error: e.toString() }))
    ),
    timeFunction('checkMetadata', () =>
      checkMetadata(content).catch((e) => ({ error: e.toString() }))
    ),
    timeFunction('getAllLinks', () => checkLinks(page).catch((e) => ({ error: e.toString() }))),
    timeFunction('keywordAnalysis', () =>
      keywordAnalysis(content).catch((e) => ({ error: e.toString() }))
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

export async function compressResponse(data: string): Promise<Uint8Array> {
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
