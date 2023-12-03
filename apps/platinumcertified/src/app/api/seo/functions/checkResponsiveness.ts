// functions/checkResponsiveness.ts
export async function checkResponsiveness(page) {
	const originalViewport = await page.viewportSize();
	let isResponsive = true;

	const viewportSizes = [
		{ width: 1200, height: 800 },
		{ width: 1024, height: 768 },
		{ width: 768, height: 1024 },
		{ width: 375, height: 667 },
	];

	for (const size of viewportSizes) {
		await page.setViewportSize(size);
		await page.waitForTimeout(500);

		let newContent, originalContent;
		try {
			newContent = await page.content();
			if (originalViewport) {
				await page.setViewportSize(originalViewport);
			}
			await page.waitForTimeout(500);

			originalContent = await page.content();
		} catch (error) {
			console.error("Error retrieving page content:", error);
			// handle the error, possibly by retrying or returning a result indicating the error
			return {
				error: error.toString(),
			};
		}

		if (newContent !== originalContent) {
			isResponsive = false;
			break;
		}
	}

	return {
		isResponsive,
	};
}
