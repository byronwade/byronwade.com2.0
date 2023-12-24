import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY);

function capitalizeFirstLetter(string) {
  return string
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/'\S/g, (match) => match.toLowerCase()); // Keep lowercase after apostrophes
}

function normalizeString(str) {
  // Remove white spaces from the beginning and end of the string
  const trimmedStr = str.trim();
  return trimmedStr.toLowerCase();
}

async function updateCommonNames() {
  let startIndex = 0;
  const batchSize = 1000; // Number of rows per batch
  let hasMore = true;
  let totalUpdatedCount = 0;

  while (hasMore) {
    let { data: mushrooms, error } = await supabase
      .from('mushrooms')
      .select('id, common_name', { count: 'exact' })
      .range(startIndex, startIndex + batchSize - 1);

    if (error) {
      console.error('Error fetching data:', error);
      break;
    }

    console.log(`Fetched ${mushrooms.length} mushrooms in this batch`);

    let updatedCount = 0;

    for (const mushroom of mushrooms) {
      if (mushroom.common_name) {
        // Remove white spaces from the beginning and end of the common name
        const normalizedCommonName = normalizeString(mushroom.common_name);
        const updatedCommonName = capitalizeFirstLetter(
          normalizedCommonName.replace(/mushroom/gi, '')
        );

        const { error: updateError } = await supabase
          .from('mushrooms')
          .update({ common_name: updatedCommonName })
          .match({ id: mushroom.id });

        if (updateError) {
          console.error(`Error updating mushroom with id ${mushroom.id}:`, updateError);
        } else {
          updatedCount++;
        }
      }
    }

    console.log(`${updatedCount} names have been updated in this batch`);

    totalUpdatedCount += updatedCount;

    if (mushrooms.length < batchSize) {
      hasMore = false;
    } else {
      startIndex += batchSize;
    }
  }

  console.log(`Total ${totalUpdatedCount} names have been updated`);
}

updateCommonNames();
