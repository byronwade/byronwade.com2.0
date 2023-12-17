import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://xmyialnxjvkyxmpbuvis.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhteWlhbG54anZreXhtcGJ1dmlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MzYxNTMsImV4cCI6MjAxODExMjE1M30.hZ3-vMSXeVHIEoPAwEaaH6kUrNLNGwFnWPswbuvoLg4';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');

  const { data, error } = await supabase
    .from('mushrooms')
    .select('*')
    .textSearch('search_text', query, { type: 'websearch' })
    .limit(20); // Limit the number of results to 20

  if (error) {
    return Response.json({ error });
  }

  return Response.json({ data });
}
