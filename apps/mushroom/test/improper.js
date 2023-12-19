const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://xmyialnxjvkyxmpbuvis.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhteWlhbG54anZreXhtcGJ1dmlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MzYxNTMsImV4cCI6MjAxODExMjE1M30.hZ3-vMSXeVHIEoPAwEaaH6kUrNLNGwFnWPswbuvoLg4";
const supabase = createClient(supabaseUrl, supabaseKey);

async function removeImproperRows() {
	// Expanded list of improper values
	const improperValues = [
		"NULL",
		"Undefined",
		"Info Not Found",
		"Not Available",
		"N/A",
		"Unknown",
		"No Data",
		"Missing",
		"Information Not Available",
		"None",
		"Empty",
		"No Info",
		"Data Not Found",
		"Unspecified",
		"No Record",
		"No Description",
		"Not Provided",
		"Not Known",
		"No Name",
		"Blank",
		"No Information",
		"Not Applicable",
		"No Details",
		"No Entry",
		"Not Recorded",
		"NaN", // Stands for Not a Number
		"No Result",
		"Undefined Data",
		"No Specification",
		"No Info Available",
		"No Value",
		"No Response",
		"Not Given",
		"Absent",
		"No Answer",
		"No Report",
		"Data Unavailable",
		"No Information Given",
		"Not Listed",
		"",
		" ",
		"No Common Name",
		"No Common Name.",
		"No Common Name Provided",
		"Glossary",
	];

	try {
		// Handle non-empty and non-null improper values
		for (const value of improperValues) {
			await deleteMushroomsWithValue(value);
		}

		// Handle empty string value
		await deleteMushroomsWithValue("");

		// Handle null value
		await deleteMushroomsWithNull();

		console.log("All improper rows have been removed.");
	} catch (error) {
		console.error("Error during deletion:", error);
	}
}

async function deleteMushroomsWithValue(value) {
	const { data: mushrooms, error: findError } = await supabase.from("mushrooms").select("id").match({ common_name: value });
	if (findError) {
		throw findError;
	}

	for (const mushroom of mushrooms) {
		await deleteMushroomAndVersions(mushroom.id);
	}
}

async function deleteMushroomsWithNull() {
	const { data: mushrooms, error: findError } = await supabase.from("mushrooms").select("id").is("common_name", null);
	if (findError) {
		throw findError;
	}

	for (const mushroom of mushrooms) {
		await deleteMushroomAndVersions(mushroom.id);
	}
}

async function deleteMushroomAndVersions(mushroomId) {
	const { error: versionError } = await supabase.from("mushroom_versions").delete().match({ mushroom_id: mushroomId });
	if (versionError) {
		console.error(`Error deleting referencing rows for mushroom id ${mushroomId}:`, versionError);
		return;
	}

	const { error: deleteError } = await supabase.from("mushrooms").delete().match({ id: mushroomId });
	if (deleteError) {
		console.error(`Error deleting mushroom with id ${mushroomId}:`, deleteError);
	}
}

removeImproperRows();
