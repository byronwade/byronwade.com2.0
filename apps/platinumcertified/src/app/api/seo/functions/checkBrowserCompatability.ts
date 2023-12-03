export const checkBrowserCompatibility = async (page) => {
	await page.waitForTimeout(500);
	await page.waitForSelector("body");
	await page.waitForLoadState("load");

	// This function assumes a simplistic approach to checking cross-browser compatibility.
	// A more complete implementation might involve using a service like BrowserStack.
	try {
		const userAgent = await page.evaluate(() => navigator.userAgent);
		return { browser: userAgent, compatible: true }; // Simplified compatibility check
	} catch (error) {
		return { error: error.toString() };
	}
};
