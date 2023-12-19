const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const url = "https://ultimate-mushroom.com/mushroom-alphabet.html";

const extractLinks = async (url) => {
	try {
		const response = await axios.get(url);
		const $ = cheerio.load(response.data);
		const base_url = "https://ultimate-mushroom.com"; // Replace with the actual base URL of the website
		const links = new Set();

		$("li > p > a").each((i, element) => {
			// Get the text without HTML tags
			const text = $(element).text().trim();

			let href = $(element).attr("href");

			// Check if it's an internal link
			if (href.startsWith("/")) {
				href = base_url + href;
			}

			const link = `http://localhost:3004/api/getBuisness?term=${encodeURIComponent(text)}&url=${href}`;
			links.add(link);
		});

		return [...links];
	} catch (error) {
		console.error(`Error fetching data: ${error}`);
		return [];
	}
};

extractLinks(url).then((links) => {
	// Save the links to a text file
	fs.writeFileSync("links6.txt", links.join("\n"), "utf-8");
	console.log("Links saved to links.txt");
});
