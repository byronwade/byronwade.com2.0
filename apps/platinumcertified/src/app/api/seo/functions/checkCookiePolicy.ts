export async function checkCookiePolicy(page) {
	await page.waitForTimeout(500);
	await page.waitForSelector("body");
	await page.waitForLoadState("load");

	const bodyText = await page.textContent("body");
	const links = await page.$$eval("a", (anchors) =>
		anchors.map((anchor) => ({
			href: anchor.href,
			text: anchor.textContent,
		}))
	);
	const hasCookiePolicyText = /cookie policy|privacy policy/i.test(bodyText);
	const hasCookiePolicyLink = links.some((link) => /cookie policy|privacy policy/i.test(link.text));
	return {
		hasCookiePolicy: hasCookiePolicyText || hasCookiePolicyLink,
	};
}
