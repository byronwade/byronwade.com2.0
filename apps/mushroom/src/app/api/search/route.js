import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY);

export const runtime = 'edge';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');
  const slug = searchParams.get('slug');

  let responseStream = new ReadableStream({
    async start(controller) {
      try {
        let totalRecords = 0;
        let loadedRecords = 0;

        // Dummy function to simulate chunked data loading
        const loadChunk = async (offset, limit) => {
          const { data, error } = await supabase
            .from('mushrooms')
            .select('*', { count: 'exact', head: true })
            .range(offset, offset + limit - 1);

          if (error) throw error;
          return data;
        };

        // Get total number of records for progress calculation
        if (query) {
          const { count } = await supabase
            .from('mushrooms')
            .select('*', { count: 'exact', head: true })
            .textSearch('search_text', query, { type: 'websearch' });

          totalRecords = count;
        }

        // Load data in chunks and send progress updates
        while (loadedRecords < totalRecords) {
          const chunkSize = 20; // Define your chunk size
          const dataChunk = await loadChunk(loadedRecords, chunkSize);
          loadedRecords += dataChunk.length;

          const progress = (loadedRecords / totalRecords) * 100;
          controller.enqueue(JSON.stringify({ progress, data: dataChunk }));
        }
      } catch (error) {
        controller.enqueue(JSON.stringify({ error: error.message }));
      }

      controller.close();
    }
  });

  return new Response(responseStream, {
    headers: { 'Content-Type': 'application/json' }
  });
}
