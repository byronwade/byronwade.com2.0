import { chromium } from 'playwright';
import sharp from 'sharp'; // Import the sharp library for image processing

export const takeScreenshot = async (domain) => {
  let browser, page;

  try {
    if (typeof domain === 'string') {
      const url = domain.startsWith('http') ? domain : 'https://' + domain;
      browser = await chromium.launch();
      page = await browser.newPage();
      await page.setViewportSize({ width: 1280, height: 720 }); // Set a specific viewport size
      await page.goto(url);
    } else {
      page = domain;
    }

    await page.waitForSelector('body');
    await page.waitForLoadState('load');

    // Take a full-page screenshot
    let buffer = await page.screenshot({ type: 'png', fullPage: true }); // Use PNG for lossless compression

    // Process the screenshot as needed (e.g., downscaling)
    // Note: The full-page screenshot might be very large, so consider the need and implications of downscaling
    const processedBuffer = await sharp(buffer)
      .resize({ width: 1280 }) // Example: Resize to a specific width
      .jpeg({ quality: 80 }) // Convert to JPEG with 80% quality
      .toBuffer();

    // Set buffer to null to release memory
    buffer = null;

    if (browser) await browser.close();

    // Return the processed buffer
    return { screenshotBuffer: processedBuffer };
  } catch (error) {
    console.error('Error taking screenshot:', error);

    if (browser) await browser.close();

    return { error: error.toString() };
  }
};
