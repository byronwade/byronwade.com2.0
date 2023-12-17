import { createClient } from '@supabase/supabase-js';
import { fetchOpenAIContent } from './functions/OpenAI';
import { fetchPageData } from '../seo/functions/fetchPageData';

// Initialize Supabase client
const supabaseUrl = 'https://xmyialnxjvkyxmpbuvis.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhteWlhbG54anZreXhtcGJ1dmlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MzYxNTMsImV4cCI6MjAxODExMjE1M30.hZ3-vMSXeVHIEoPAwEaaH6kUrNLNGwFnWPswbuvoLg4';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');
  const term = searchParams.get('term');

  try {
    let business = null;

    if (url) {
      business = await fetchPageData(url);
      if (!business) {
        console.error('Failed to get basic company data');
        return Response.json({ error: 'Failed to get basic company data' });
      }
    }

    if (!term) {
      console.error('No search term provided');
      return Response.json({ error: 'No search term provided' });
    }

    const openAIContent = await fetchOpenAIContent(business, term);
    if (!openAIContent) {
      console.error('Failed to get OpenAI content');
      return Response.json({ error: 'Failed to get OpenAI content' });
    }

    // Check if mushroom already exists
    const existingMushroomResponse = await supabase
      .from('mushrooms')
      .select('id')
      .match({ common_name: term })
      .single();

    let mushroomId;
    if (existingMushroomResponse.data) {
      // Mushroom exists, get its ID
      mushroomId = existingMushroomResponse.data.id;
    } else {
      const newContent = openAIContent.openAIResponse;
      const openAIEstimatedCost = openAIContent.openAIEstimatedCost;
      const insertResponse = await supabase
        .from('mushrooms')
        .insert([{ ...newContent, openAIEstimatedCost }])
        .select('*');
      if (insertResponse.error) throw insertResponse.error;
      mushroomId = insertResponse.data[0].id;
    }

    // Get the latest version number for this mushroom
    const latestVersionResponse = await supabase
      .from('mushroom_versions')
      .select('version_number')
      .eq('mushroom_id', mushroomId)
      .order('version_number', { ascending: false })
      .limit(1);
    const latestVersionNumber = latestVersionResponse.data?.[0]?.version_number || 0;

    // Insert new version
    const versionResponse = await supabase.from('mushroom_versions').insert([
      {
        mushroom_id: mushroomId,
        version_number: latestVersionNumber + 1,
        data: { ...openAIContent }
      }
    ]);

    if (versionResponse.error) {
      console.error('Error inserting version data into Supabase:', versionResponse.error.message);
      return Response.json({ error: 'Error inserting version data into Supabase' });
    }

    return Response.json({ openAIContent, supabaseData: versionResponse.data });
  } catch (error) {
    console.error('API Error:', error.message);
    return Response.json({ error: 'Internal Server Error' });
  }
}
