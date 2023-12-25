const algoliasearch = require('algoliasearch'); // Use require for CommonJS
const { createClient } = require('@supabase/supabase-js');

async function fetchAndUploadDataToAlgolia() {
  try {
    // Initialize variables for pagination
    let offset = 0;
    const batchSize = 1000; // Number of records to fetch in each batch

    while (true) {
      // Fetch data from the "public.mushrooms" table in Supabase in batches
      const { data, error } = await supabase
        .from('mushrooms')
        .select('*')
        .range(offset, offset + batchSize - 1);

      if (error) {
        throw error;
      }

      if (!data || data.length === 0) {
        // No more data to fetch, break the loop
        break;
      }

      // Transform your Supabase data into the format required by Algolia
      const records = data.map((item) => ({
        objectID: item.id.toString(), // Convert the ID to a string
        origin: item.origin,
        genetic_lineage: item.genetic_lineage,
        year_discovered: item.year_discovered,
        description: item.description,
        poisonous: item.poisonous,
        edible: item.edible,
        categories: item.categories,
        physical_characteristics: item.physical_characteristics,
        microscopic_features: item.microscopic_features,
        growth_info: item.growth_info,
        potency_info: item.potency_info,
        dosage_recommendations: item.dosage_recommendations,
        storage: item.storage,
        legal_status: item.legal_status,
        additional_info: item.additional_info,
        educational_summary: item.educational_summary,
        research_data: item.research_data,
        tags: item.tags,
        cite_sources: item.cite_sources,
        growth_conditions: item.growth_conditions,
        medicinal_properties: item.medicinal_properties,
        nutritional_value: item.nutritional_value,
        user_experience: item.user_experience,
        scientific_profile: item.scientific_profile,
        classification: item.classification,
        common_name: item.common_name,
        slug: item.slug
      }));

      // Upload the transformed data to Algolia
      const { objectIDs } = await algoliaIndex.saveObjects(records);

      console.log(`Uploaded ${objectIDs.length} records to Algolia.`);

      // Increment the offset for the next batch
      offset += batchSize;
    }
  } catch (error) {
    console.error('Error fetching/uploading data to Algolia:', error);
    throw error;
  }
}

async function main() {
  try {
    await fetchAndUploadDataToAlgolia();
  } catch (error) {
    console.error('Main function error:', error);
  }
}

main();
