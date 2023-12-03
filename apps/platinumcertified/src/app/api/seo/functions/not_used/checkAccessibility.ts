// functions/checkAccessibility.ts
export async function checkAccessibility(page) {
  try {
    await page.waitForTimeout(500);
    await page.waitForSelector('body');
    await page.waitForLoadState('load');

    // ... previous checks

    // Check for lang attribute
    const langAttribute = await page.evaluate(() => document.documentElement.lang);
    const missingLang = !langAttribute;

    // Check for heading structure
    const headings = await page.evaluate(() => {
      const headingLevels = [1, 2, 3, 4, 5, 6];
      return headingLevels.map((level) => document.querySelectorAll(`h${level}`).length);
    });
    const missingHeadings = headings.every((count) => count === 0);

    // Check for link text
    const links = await page.$$eval('a', (links) => links.map((link) => link.innerText));
    const missingLinkText = links.filter((text) => !text).length;

    // Placeholder for color contrast check, may require external libraries or complex logic
    const colorContrast = 'Not Checked';

    // Check for table headers
    const tables = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('table')).map((table) => {
        const hasColHeaders = !!table.querySelector('th');
        const hasRowHeaders = Array.from(table.querySelectorAll('tr')).some(
          (row) => !!row.querySelector('th')
        );
        return { hasColHeaders, hasRowHeaders };
      });
    });
    const tablesWithoutHeaders = tables.filter(
      (table) => !table.hasColHeaders && !table.hasRowHeaders
    ).length;

    // Check for focusable elements
    const focusableElements = await page.evaluate(() => {
      const focusable = [
        ...document.querySelectorAll(
          'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ];
      return focusable.map((elem) => elem);
    });
    const nonFocusableInteractive = focusableElements.filter((tabIndex) => tabIndex < 0).length;

    return {
      // ... previous results
      missingLang,
      missingHeadings,
      missingLinkText,
      colorContrast,
      tablesWithoutHeaders,
      nonFocusableInteractive
    };
  } catch (error) {
    console.error('Error checking accessibility:', error);
    return {
      error: error.toString()
    };
  }
}
