import { chromium } from 'playwright';

// Global browser instance to be reused
let browser;

async function getBrowser() {
  if (!browser) {
    browser = await chromium.launch({ headless: true });
  }
  return browser;
}

// Function to fetch social media links from the page
async function getSocialLinks(page) {
  return page.$$eval('a', (links) => {
    return links
      .map((link) => link.href)
      .filter(
        (href) =>
          href.includes('facebook.com') ||
          href.includes('twitter.com') ||
          href.includes('linkedin.com')
      );
  });
}

interface MetaLinks {
  twitter?: string; // The '?' makes the 'twitter' property optional
}

// Function to fetch meta social links from the page
async function getMetaSocialLinks(page): Promise<MetaLinks> {
  return page.$$eval('meta', (tags): MetaLinks => {
    const metaLinks: MetaLinks = {};
    tags.forEach((tag) => {
      const property = tag.getAttribute('property');
      const content = tag.getAttribute('content');
      if (property && content) {
        if (property.includes('twitter:site')) {
          metaLinks.twitter = content.startsWith('@')
            ? `https://twitter.com/${content.substring(1)}`
            : content;
        }
      }
    });
    return metaLinks;
  });
}

export const analyzeSocialSignals = async (domain) => {
  const url =
    domain.startsWith('http://') || domain.startsWith('https://') ? domain : `https://${domain}`;

  const browser = await getBrowser();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  const results = {
    facebook: { link: null, profileName: null, sharedCount: null },
    twitter: { link: null, profileName: null, sharedCount: null },
    linkedin: { link: null, profileName: null, sharedCount: null }
  };

  // Parallelizing the fetching of social links and meta social links
  const [socialLinks, metaSocialLinks] = await Promise.all([
    getSocialLinks(page),
    getMetaSocialLinks(page)
  ]);

  const combinedLinks = {
    ...metaSocialLinks,
    ...Object.fromEntries(
      socialLinks.map((link) => [link.split('.com')[0].split('//').pop(), link])
    )
  };

  // Parallelizing the fetching of share counts and updating of results
  const fetchPromises = Object.entries(combinedLinks).map(async () => {
    // ... rest of the code remains the same
  });

  await Promise.all(fetchPromises);
  await page.close(); // Close the page but keep the browser instance for reuse

  return results;
};
