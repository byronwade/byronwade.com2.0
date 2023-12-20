import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://xmyialnxjvkyxmpbuvis.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhteWlhbG54anZreXhtcGJ1dmlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MzYxNTMsImV4cCI6MjAxODExMjE1M30.hZ3-vMSXeVHIEoPAwEaaH6kUrNLNGwFnWPswbuvoLg4';
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to find an existing common name in the mushrooms table with the highest confidenceScore
export async function findExisting(term) {
  console.log('findExisting', term);
  try {
    // Construct a query that checks multiple fields, including arrays
    const { data: common, error: errorCommon } = await supabase
      .from('mushrooms')
      .select()
      .textSearch('common_name', term);

    const { data: scientific, error: errorScientific } = await supabase
      .from('mushrooms')
      .select()
      .ilike('scientific_profile->>scientific_name', `%${term}%`);

    console.log('common', common);
    console.log('scientific', scientific);

    if (error) {
      throw error;
    }

    let result;
    if (data && data.length > 0) {
      result = data[0];
    } else {
      result = null; // No matching term found
    }

    return result;
  } catch (error) {
    console.error('Error finding existing term:', error.message);
    return null;
  }
}
