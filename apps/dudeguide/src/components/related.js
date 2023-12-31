import { createClient } from '@supabase/supabase-js';
import { BusinessCard } from './businessCard';

const supabase = createClient(process.env['SUPABASE_URL'], process.env['SUPABASE_API_KEY']);
const { data: business } = await supabase.from('business').select('*');

export async function Related() {
  return (
    <>
      <div className="flex justify-center items-center mt-20 mb-5 w-full">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Similar websites</h2>
      </div>
      <div role="list" className="flex flex-wrap p-5">
        {business.slice(0, 6).map((business) => (
          <BusinessCard key={business.id} {...business} />
        ))}
      </div>
    </>
  );
}
