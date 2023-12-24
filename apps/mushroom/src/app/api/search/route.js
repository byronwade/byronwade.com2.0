import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY);

export const runtime = 'edge';
// Prevents this route's response from being cached
export const dynamic = 'force-dynamic';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');
  const slug = searchParams.get('slug');

  let responseStream = new ReadableStream({
    async start(controller) {
      let data, error;

      if (slug) {
        // If a slug is provided, use it for an exact match
        ({ data, error } = await supabase.from('mushrooms').select('*').eq('slug', slug).single());
      } else if (query) {
        // If a query is provided, perform a text search
        ({ data, error } = await supabase
          .from('mushrooms')
          .select('*')
          .textSearch('search_text', query, { type: 'websearch' })
          .limit(20));
      } else {
        // Handle case where neither slug nor query is provided
        error = { message: 'No search parameters provided.' };
      }

      if (error) {
        controller.enqueue(JSON.stringify({ error }));
      } else {
        controller.enqueue(JSON.stringify({ data }));
      }
      controller.close();
    }
  });

  return new Response(responseStream, {
    headers: { 'Content-Type': 'application/json' }
  });
}
