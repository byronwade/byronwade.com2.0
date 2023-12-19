const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://xmyialnxjvkyxmpbuvis.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhteWlhbG54anZreXhtcGJ1dmlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MzYxNTMsImV4cCI6MjAxODExMjE1M30.hZ3-vMSXeVHIEoPAwEaaH6kUrNLNGwFnWPswbuvoLg4";
const supabase = createClient(supabaseUrl, supabaseKey);

async function revertSpaces() {
	let startIndex = 0;
	const batchSize = 1000; // Number of rows per batch
	let hasMore = true;
	let totalRevertedCount = 0;

	while (hasMore) {
		let { data: mushrooms, error } = await supabase
			.from("mushrooms")
			.select("id, common_name", { count: "exact" })
			.range(startIndex, startIndex + batchSize - 1);

		if (error) {
			console.error("Error fetching data:", error);
			break;
		}

		console.log(`Fetched ${mushrooms.length} mushrooms in this batch`);

		let revertedCount = 0;

		for (const mushroom of mushrooms) {
			if (mushroom.common_name) {
				// Revert the changes to common_name (add spaces)
				const originalCommonName = mushroom.common_name.replace(/([a-z])([A-Z])/g, "$1 $2");
				const { error: updateError } = await supabase.from("mushrooms").update({ common_name: originalCommonName }).match({ id: mushroom.id });

				if (updateError) {
					console.error(`Error updating mushroom with id ${mushroom.id}:`, updateError);
				} else {
					revertedCount++;
				}
			}
		}

		console.log(`${revertedCount} names have been reverted in this batch`);

		totalRevertedCount += revertedCount;

		if (mushrooms.length < batchSize) {
			hasMore = false;
		} else {
			startIndex += batchSize;
		}
	}

	console.log(`Total ${totalRevertedCount} names have been reverted`);
}

revertSpaces();
