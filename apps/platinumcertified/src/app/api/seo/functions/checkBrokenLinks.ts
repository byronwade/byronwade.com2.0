import { Page } from 'playwright';

interface BrokenLinksDetails {
  totalLinks: number;
  brokenLinks: number;
  brokenLinksList: string[];
}

export const checkBrokenLinks = async (page: Page): Promise<BrokenLinksDetails> => {
  await page.waitForSelector('body');
  await page.waitForLoadState('load');
  const links = await page.$$eval('a', (anchors) =>
    anchors.map((anchor) => anchor.getAttribute('href') || '')
  );

  const brokenLinksDetails = {
    totalLinks: links.length,
    brokenLinks: 0,
    brokenLinksList: [] as string[]
  };

  const CONCURRENT_LIMIT = 5;
  const pendingLinks = [...links];

  const checkLink = async (link: string) => {
    try {
      const response = await fetch(link, { method: 'HEAD' }); // Use HEAD method for faster response
      if (!response.ok) {
        brokenLinksDetails.brokenLinks += 1;
        brokenLinksDetails.brokenLinksList.push(link);
      }
    } catch (error) {
      brokenLinksDetails.brokenLinks += 1;
      brokenLinksDetails.brokenLinksList.push(link);
    }
  };

  const timeoutPromise = new Promise<void>((_, reject) =>
    setTimeout(() => reject(new Error('Timeout reached')), 5000)
  );

  try {
    await Promise.race([
      (async () => {
        for (let i = 0; i < links.length; i += CONCURRENT_LIMIT) {
          const batch = pendingLinks.slice(i, i + CONCURRENT_LIMIT);
          await Promise.all(batch.map(checkLink));
        }
      })(),
      timeoutPromise
    ]);
  } catch (error) {
    console.log(error.message); // Log the timeout error message
  }

  return brokenLinksDetails;
};
