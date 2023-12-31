'use client';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { createClient } from '../../utils/supabase/client';

export default function Search() {
  const [session, setSession] = useState(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    console.log(authListener);
  }, []);

  console.log(session);

  return (
    <>
      <div className="mx-auto mt-10">
        <div>{session ? <span>User is logged in</span> : <span>User is logged out</span>}</div>
        <div className="prose dark:prose-invert prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-lg prose-headings:underline">
          <p>
            This is a generative text display to see what it looks like qqwec wqec w ec we c eqw c
            qwec qw ec wqe cqw ec wqecqw ecqwe cqwec qwecqwe qwec qwec qwec
          </p>
          <Link href="https://google.com">This is a Link</Link>
          <p>
            This is a generative text display to see what it looks like qqwec wqec w ec we c eqw c
            qwec qw ec wqe cqw ec wqecqw ecqwe cqwec qwecqwe qwec qwec qwec
          </p>
          <p>
            This is a generative text display to see what it looks like qqwec wqec w ec we c eqw c
            qwec qw ec wqe cqw ec wqecqw ecqwe cqwec qwecqwe qwec qwec qwec
          </p>
          <p>
            This is a generative text display to see what it looks like qqwec wqec w ec we c eqw c
            qwec qw ec wqe cqw ec wqecqw ecqwe cqwec qwecqwe qwec qwec qwec
          </p>
        </div>
      </div>
    </>
  );
}
