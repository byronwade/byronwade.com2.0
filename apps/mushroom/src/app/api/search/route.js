import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY);

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');
  const slug = searchParams.get('slug');

  let responseStream = new ReadableStream({
    async start(controller) {
      try {
        if (slug) {
          // Fetch specific record by slug
          const { data, error } = await supabase
            .from('mushrooms')
            .select('*')
            .eq('slug', slug)
            .single();
          if (error) throw error;
          controller.enqueue(JSON.stringify({ data }) + '\n');
        } else if (query) {
          let totalRecords = 0;
          let loadedRecords = 0;

          const { count } = await supabase
            .from('mushrooms')
            .select('*', { count: 'exact', head: true })
            .textSearch('search_text', query, { type: 'websearch' });
          totalRecords = count;

          const chunkSize = 20; // Define your chunk size

          // Load data in chunks and send progress updates
          for (let offset = 0; offset < totalRecords; offset += chunkSize) {
            const { data: dataChunk, error } = await supabase
              .from('mushrooms')
              .select('*')
              .textSearch('search_text', query, { type: 'websearch' })
              .range(offset, offset + chunkSize - 1);

            if (error) throw error;
            loadedRecords += dataChunk.length;
            const progress = Math.min((loadedRecords / totalRecords) * 100, 100);
            controller.enqueue(JSON.stringify({ progress, data: dataChunk }) + '\n');
          }
        } else {
          // Handle case where neither slug nor query is provided
          throw new Error('No search parameters provided.');
        }
      } catch (error) {
        controller.enqueue(JSON.stringify({ error: error.message }) + '\n');
      } finally {
        controller.close();
      }
    }
  });

  return new Response(responseStream, {
    headers: { 'Content-Type': 'application/json' }
  });
}
