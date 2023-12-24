const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xmyialnxjvkyxmpbuvis.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhteWlhbG54anZreXhtcGJ1dmlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MzYxNTMsImV4cCI6MjAxODExMjE1M30.hZ3-vMSXeVHIEoPAwEaaH6kUrNLNGwFnWPswbuvoLg4';
const supabase = createClient(supabaseUrl, supabaseKey);

function normalizeString(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[\s\-_]+/g, '')
    .replace(/[^a-z0-9]/gi, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

async function removeDuplicates() {
  const limit = 100;
  let totalDuplicatesRemoved = 0;
  let index = 0;

  // Fetch the total count of rows in the database
  const { count: totalRows } = await supabase.from('mushrooms').select('id', { count: 'exact' });

  while (index < totalRows) {
    const { data: mushrooms, error } = await supabase
      .from('mushrooms')
      .select('id, common_name')
      .range(index, index + limit - 1);

    if (error) {
      console.error('Error fetching mushrooms:', error);
      break;
    }

    const groupedByName = mushrooms.reduce((acc, mushroom) => {
      const normalized = normalizeString(mushroom.common_name);
      if (!acc[normalized]) {
        acc[normalized] = [];
      }
      acc[normalized].push(mushroom.id);
      return acc;
    }, {});

    const duplicates = Object.values(groupedByName).flatMap((ids) => ids.slice(1));

    if (duplicates.length > 0) {
      const { error: deleteError } = await supabase.from('mushrooms').delete().in('id', duplicates);
      if (deleteError) {
        console.error('Error removing duplicates:', deleteError);
      } else {
        console.log(`Removed ${duplicates.length} duplicates.`);
        totalDuplicatesRemoved += duplicates.length;
      }
    }

    index += limit;
  }

  console.log(`Total duplicates removed: ${totalDuplicatesRemoved}`);
}

async function main() {
  await removeDuplicates();
}

main();
