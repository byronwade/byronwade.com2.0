const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xmyialnxjvkyxmpbuvis.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhteWlhbG54anZreXhtcGJ1dmlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MzYxNTMsImV4cCI6MjAxODExMjE1M30.hZ3-vMSXeVHIEoPAwEaaH6kUrNLNGwFnWPswbuvoLg4';
const supabase = createClient(supabaseUrl, supabaseKey);

function normalizeString(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, '')
    .replace(/mushroom/g, '')
    .replace(/\s+/g, '');
}

async function removeDuplicates(mushrooms) {
  const uniqueNormalizedNames = new Map();
  const duplicateIds = new Set();

  mushrooms.forEach((mushroom) => {
    if (mushroom.common_name) {
      const normalized = normalizeString(mushroom.common_name);
      const existingEntry = uniqueNormalizedNames.get(normalized);

      if (existingEntry) {
        duplicateIds.add(mushroom.id);
      } else {
        uniqueNormalizedNames.set(normalized, mushroom);
      }
    }
  });

  console.log(`Found ${duplicateIds.size} duplicates to remove`);
  console.log('Duplicates removed successfully');
}

async function normalizeAndRemoveDuplicates() {
  let startIndex = 0;
  const batchSize = 1000; // Number of rows per batch
  let hasMore = true;

  while (hasMore) {
    let { data: mushrooms, error } = await supabase
      .from('mushrooms')
      .select('id, common_name', { count: 'exact' })
      .range(startIndex, startIndex + batchSize - 1);

    if (error) {
      console.error('Error fetching data:', error);
      break;
    }

    console.log(`Fetched ${mushrooms.length} mushrooms`);

    await removeDuplicates(mushrooms);

    if (mushrooms.length < batchSize) {
      hasMore = false;
    } else {
      startIndex += batchSize;
    }
  }
}

normalizeAndRemoveDuplicates();
