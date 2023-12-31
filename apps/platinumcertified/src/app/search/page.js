'use client';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { FloatingAI } from '../../components/floatingAI';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Search() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const supabase = createClientComponentClient();
    const getUser = async () => {
      const { data: session } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    getUser();
  }, []);
  return (
    <>
      <div>{user ? <p>User is logged in</p> : <p>User is not logged in</p>}</div>
      <div className="mx-auto mt-10">
        <div className="mx-auto">
          <FloatingAI />
        </div>
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
