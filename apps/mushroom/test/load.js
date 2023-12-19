const axios = require("axios");
const fs = require("fs");
const https = require("https"); // Add this line

// Function to load a single URL
async function loadUrl(url) {
	try {
		const instance = axios.create({
			httpsAgent: new https.Agent({
				rejectUnauthorized: false,
			}),
		});

		const response = await instance.get(url);
		console.log(`Loaded URL: ${url}`);
		console.log(`Response Status: ${response.status}`);
		return response.data;
	} catch (error) {
		console.error(`Error loading URL ${url}: ${error}`);
		return null; // Return null or appropriate error response
	}
}
// Function to load URLs in batches
async function loadUrlsInBatches(batchedUrls) {
	for (const url of batchedUrls) {
		const results = await Promise.all(url.map((url) => loadUrl(url)));
		console.log("Batch loaded.");
		console.log("Results:", results);
	}
}

// Read links from the text file
const linksFromFile = fs.readFileSync("links7.txt", "utf-8");
const urls = linksFromFile.split("\n").filter((link) => link.trim() !== "");

// Specify the batch size (e.g., 10 URLs per batch)
const batchSize = 10;

// Divide the URLs into batches
const batches = [];
for (let i = 0; i < urls.length; i += batchSize) {
	batches.push(urls.slice(i, i + batchSize));
}

// Start loading URLs in batches
loadUrlsInBatches(batches);
