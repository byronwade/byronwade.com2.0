const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xmyialnxjvkyxmpbuvis.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhteWlhbG54anZreXhtcGJ1dmlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MzYxNTMsImV4cCI6MjAxODExMjE1M30.hZ3-vMSXeVHIEoPAwEaaH6kUrNLNGwFnWPswbuvoLg4';
const supabase = createClient(supabaseUrl, supabaseKey);

async function removeImproperRows() {
  // Expanded list of improper values
  const improperValues = [
    'NULL',
    'Undefined',
    'Info Not Found',
    'Not Available',
    'N/A',
    'Unknown',
    'No Data',
    'Missing',
    'Information Not Available',
    'None',
    'Empty',
    'No Info',
    'Data Not Found',
    'Unspecified',
    'No Record',
    'No Description',
    'Not Provided',
    'Not Known',
    'No Name',
    'Blank',
    'No Information',
    'Not Applicable',
    'No Details',
    'No Entry',
    'Not Recorded',
    'NaN', // Stands for Not a Number
    'No Result',
    'Undefined Data',
    'No Specification',
    'No Info Available',
    'No Value',
    'No Response',
    'Not Given',
    'Absent',
    'No Answer',
    'No Report',
    'Data Unavailable',
    'No Information Given',
    'Not Listed',
    '',
    ' ',
    'No Common Name',
    'No Common Name.',
    'No Common Name Provided',
    'Glossary'
  ];

  try {
    // Delete rows matching each improper value
    for (const value of improperValues) {
      await deleteMushroomsWithValue(value);
    }

    // Delete rows where 'common_name' is NULL or an empty string
    await deleteMushroomsWithNullOrEmpty();

    console.log('All improper rows have been removed.');
  } catch (error) {
    console.error('Error during deletion:', error);
  }
}

async function deleteMushroomsWithValue(value) {
  const { error } = await supabase.from('mushrooms').delete().match({ common_name: value });
  if (error) {
    throw error;
  }
}

async function deleteMushroomsWithNullOrEmpty() {
  const { error } = await supabase
    .from('mushrooms')
    .delete()
    .or('common_name.is.null,common_name.eq.');
  if (error) {
    throw error;
  }
}

removeImproperRows();
