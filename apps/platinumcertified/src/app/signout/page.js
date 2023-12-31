import { supabase } from '../../utils/supabase';

export default async function Signout() {
  const { error } = await supabase.auth.signOut();
  console.log(error);

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT') {
      console.log('SIGNED_OUT', session);
    }
  });

  return <button>Sign out</button>;
}
