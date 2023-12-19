import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://xmyialnxjvkyxmpbuvis.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhteWlhbG54anZreXhtcGJ1dmlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MzYxNTMsImV4cCI6MjAxODExMjE1M30.hZ3-vMSXeVHIEoPAwEaaH6kUrNLNGwFnWPswbuvoLg4';
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to find an existing common name in the mushrooms table with the highest confidenceScore
export async function findExistingCommonName(commonName) {
  console.log('commonName', commonName.replace('Mushroom', '').trim());

  try {
    const existingMushroomResponse = await supabase
      .from('mushrooms')
      .select('*')
      .eq('common_name', commonName.replace(/mushroom/i, '').trim()) // Use eq to match the term within the "name" field
      .order('overall_content_quality_score', { ascending: false }) // Order by confidenceScore in descending order
      .limit(1); // Limit the result to 1 row

    console.log('existingMushroomResponse', existingMushroomResponse);

    if (existingMushroomResponse.data.length > 0) {
      const highestConfidenceMushroom = existingMushroomResponse.data[0];
      return {
        ...highestConfidenceMushroom
      };
    } else {
      return null; // Common name not found
    }
  } catch (error) {
    console.error('Error finding existing common name:', error.message);
    throw error;
  }
}
