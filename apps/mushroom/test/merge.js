import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY);

async function mergeAllMushroomVersions() {
  // Load all mushrooms (from 'mushrooms' table)
  const { data: allMushrooms, error: mushroomsError } = await supabase
    .from('mushrooms')
    .select('*');

  if (mushroomsError) {
    console.error('Error fetching all mushrooms:', mushroomsError);
    return;
  }

  // Iterate over all mushrooms and merge their data
  for (const mushroom of allMushrooms) {
    const mushroomId = mushroom.id;

    // Load older versions (from 'mushroom_versions' table)
    const { data: olderVersions, error: versionsError } = await supabase
      .from('mushroom_versions')
      .select('data')
      .eq('mushroom_id', mushroomId)
      .order('version_number', { ascending: false });

    if (versionsError) {
      console.error(
        `Error fetching older versions for mushroom with ID ${mushroomId}:`,
        versionsError
      );
      continue; // Continue to the next mushroom if there was an error
    }

    // Merge common_name field from older versions into the latest master version
    for (const olderVersion of olderVersions) {
      const olderData = olderVersion.data;

      if (olderData && olderData.openAIResponse && olderData.openAIResponse.common_name) {
        mushroom.common_name = olderData.openAIResponse.common_name;

        // Update the 'mushrooms' table with the merged data
        const { error: updateError } = await supabase
          .from('mushrooms')
          .update({ common_name: mushroom.common_name })
          .eq('id', mushroomId);

        if (updateError) {
          console.error(`Error updating mushroom with ID ${mushroomId}:`, updateError);
          continue; // Continue to the next older version
        }

        console.log(
          `Merged common_name for mushroom with ID ${mushroomId} from version ${olderVersion.version_number}`
        );
      }
    }
  }

  console.log('Merge process completed successfully for all mushrooms');
}

// Call the merge function
mergeAllMushroomVersions();
