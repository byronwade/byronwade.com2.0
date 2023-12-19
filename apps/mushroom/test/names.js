const { createClient } = require("@supabase/supabase-js");
//const { OpenAI } = require("openai");
require("dotenv").config();
const FuzzySet = require("fuzzyset.js");

// Initialize Supabase client
const supabaseUrl = "https://xmyialnxjvkyxmpbuvis.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhteWlhbG54anZreXhtcGJ1dmlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MzYxNTMsImV4cCI6MjAxODExMjE1M30.hZ3-vMSXeVHIEoPAwEaaH6kUrNLNGwFnWPswbuvoLg4";
const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize OpenAI
//const openai = new OpenAI({ apiKey: process.env["OPENAI_API_KEY"] });

// Function to find similar names using OpenAI
function findSimilarNames(namePairs) {
	namePairs.forEach((pair) => {
		let a = FuzzySet([pair[0]]);
		let result = a.get(pair[1]);

		// result is null if no matches are found
		if (result && result[0][0] > 0.7) {
			// 0.7 is the threshold for similarity
			console.log(`Names: ${pair[0]} and ${pair[1]} are similar with a score of: ${result[0][0]}`);
		}
	});
}

// Function to generate pairs of names
function generatePairs(names) {
	let pairs = [];
	for (let i = 0; i < names.length; i++) {
		for (let j = i + 1; j < names.length; j++) {
			pairs.push([names[i], names[j]]);
		}
	}
	return pairs;
}

// Main function to normalize and remove duplicates
async function normalizeAndRemoveDuplicates() {
	// Retrieve data from the database
	let { data: mushrooms, error } = await supabase.from("mushrooms").select("id, common_name");
	if (error) {
		console.error("Error fetching data:", error);
		return;
	}

	// Filter out unwanted names and convert to uppercase
	const invalidNames = ["N/A", "NONE", "None", "", " ", "NULL", "NOT PROVIDED", "NO INFORMATION SUPPLIED", "No Common Name"];
	mushrooms = mushrooms.filter((mushroom) => mushroom.common_name && !invalidNames.includes(mushroom.common_name.trim().toUpperCase()));

	// Normalize names to uppercase and find duplicates
	let uniqueNormalizedNames = new Set();
	let duplicates = []; // Array to store IDs of duplicate mushrooms

	mushrooms.forEach((mushroom) => {
		if (mushroom.common_name) {
			const normalized = mushroom.common_name
				.trim()
				.toUpperCase()
				.replace(/[^A-Z0-9]/gi, "");
			if (uniqueNormalizedNames.has(normalized)) {
				duplicates.push(mushroom.id); // Add ID to duplicates for deletion
			} else {
				uniqueNormalizedNames.add(normalized);
			}
		}
	});

	// Extract names for comparison
	let names = Array.from(uniqueNormalizedNames);

	// Generate pairs and find similar names using OpenAI
	let namePairs = generatePairs(names);
	await findSimilarNames(namePairs);
}

normalizeAndRemoveDuplicates();
