import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://xmyialnxjvkyxmpbuvis.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhteWlhbG54anZreXhtcGJ1dmlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MzYxNTMsImV4cCI6MjAxODExMjE1M30.hZ3-vMSXeVHIEoPAwEaaH6kUrNLNGwFnWPswbuvoLg4';
const supabase = createClient(supabaseUrl, supabaseKey);

function convertToSlug(text) {
  if (!text) return ''; // Handle null or empty strings
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export async function findExisting(term) {
  console.log('Found Existing Term', term);
  try {
    // Search by common name
    const { data: common, error: errorCommon } = await supabase
      .from('mushrooms')
      .select()
      .eq('common_name', term);

    // Search by slug
    const { data: slugData, error: errorSlug } = await supabase
      .from('mushrooms')
      .select()
      .eq('slug', convertToSlug(term));

    // Search by scientific name
    const { data: strain, error: errorStrain } = await supabase
      .from('mushrooms')
      .select()
      .eq('scientific_profile->>strain_name', term);

    // Search by scientific name
    const { data: scientific, error: errorScientific } = await supabase
      .from('mushrooms')
      .select()
      .eq('scientific_profile->>scientific_name', term);

    if (errorCommon || errorScientific || errorSlug || errorStrain) {
      throw errorCommon || errorScientific || errorSlug || errorStrain;
    }

    let result;
    if (common?.length > 0) {
      result = common[0];
    } else if (slugData?.length > 0) {
      result = slugData[0];
    } else if (scientific?.length > 0) {
      result = scientific[0];
    } else if (strain?.length > 0) {
      result = strain[0];
    } else {
      result = null; // No matching term found
    }

    // Check if result is not null before accessing its properties
    if (result) {
      console.log('Found Existing Result:', result.common_name);
      return result;
    } else {
      console.log('No matching term found');
      return null;
    }
  } catch (error) {
    console.error('Error finding existing term:', error.message);
    return null;
  }
}
