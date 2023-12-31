import { createClient } from '../../utils/supabase/server';
const supabase = createClient();

export default async function Unauthenticated() {
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (session) {
    return <p>You are signed in</p>;
  }

  return <p>Please sign in to see todos!</p>;
}
