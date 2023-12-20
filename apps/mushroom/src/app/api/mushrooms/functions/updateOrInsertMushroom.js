import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://xmyialnxjvkyxmpbuvis.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhteWlhbG54anZreXhtcGJ1dmlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MzYxNTMsImV4cCI6MjAxODExMjE1M30.hZ3-vMSXeVHIEoPAwEaaH6kUrNLNGwFnWPswbuvoLg4';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function updateOrInsertMushroom(existingMushroomResponse, newMushroomResponse) {
  try {
    const newData = newMushroomResponse.openAIResponse;
    const currentTime = new Date().toISOString();

    if (existingMushroomResponse) {
      // Existing data found, proceed to update
      if (
        newData.scientific_profile.contentQuality >
        existingMushroomResponse.scientific_profile.contentQuality
      ) {
        const updateData = {
          ...mergeData(existingMushroomResponse, newData),
          updated_at: existingMushroomResponse.updated_at || currentTime
        };

        const { data, error } = await supabase
          .from('mushrooms')
          .update(updateData)
          .eq('id', existingMushroomResponse.id);

        if (error) throw error;
        return { mushroomId: existingMushroomResponse.id, data };
      }
      return { mushroomId: existingMushroomResponse.id };
    } else {
      // No existing data, insert new data
      const insertData = {
        ...newData,
        created_at: currentTime,
        updated_at: currentTime
      };

      const { data, error } = await supabase.from('mushrooms').insert([insertData]);

      if (error) throw error;
      return { data };
    }
  } catch (error) {
    console.error('Database operation failed:', error.message);
    return { error: 'Internal Server Error' };
  }
}

function isInvalidValue(value) {
  const invalidValues = [
    'Not available',
    'Information not available',
    'N/A',
    'Null',
    undefined,
    null,
    false,
    '',
    ' ',
    '[]',
    '{}'
  ];
  return invalidValues.includes(value);
}
