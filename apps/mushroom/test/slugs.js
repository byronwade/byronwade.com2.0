import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY);

/**
 * Converts a string into a slug format.
 * @param {string} text
 * @returns {string}
 */

function convertToSlug(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

async function updateSlugs() {
  try {
    let index = 0;
    let count = 0;
    const limit = 100; // Number of rows to fetch per request

    while (true) {
      const {
        data: mushrooms,
        error: fetchError,
        count: fetchedCount
      } = await supabase
        .from('mushrooms')
        .select('id, common_name', { count: 'exact' })
        .range(index, index + limit - 1);

      if (fetchError) {
        throw fetchError;
      }

      if (!mushrooms.length) {
        break; // Exit the loop if no more mushrooms are found
      }

      for (const mushroom of mushrooms) {
        const slug = convertToSlug(mushroom.common_name);
        const { error: updateError } = await supabase
          .from('mushrooms')
          .update({ slug: slug })
          .eq('id', mushroom.id);

        if (updateError) {
          console.error(`Error updating mushroom with ID ${mushroom.id}:`, updateError);
        } else {
          console.log(`Updated mushroom with ID ${mushroom.id} with slug: ${slug}`);
        }
      }

      count += mushrooms.length;
      index += limit;

      if (fetchedCount < limit) {
        break; // Exit if fewer than limit rows were fetched
      }
    }

    console.log(`All ${count} slugs updated successfully.`);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

updateSlugs();
