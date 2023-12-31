import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function Signup() {
  const supabase = createServerComponentClient();
  const { data, error } = await supabase.auth.signUp({
    email: 'bcw1995@gmail.com',
    password: 'Byronwade1995!'
  });
  console.log(data, error);
  return <>Sugn up</>;
}
