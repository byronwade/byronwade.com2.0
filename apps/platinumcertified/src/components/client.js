'use client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import SessionData from './sessionData';

const UpdateForm = () => {
  const { data: session, update } = useSession();
  const [name, setName] = useState(session?.user.name ?? '');

  if (!session) return null;
  return (
    <>
      <h2 className="text-xl font-bold">Updating the session</h2>
      <form
        onSubmit={async () => {
          if (session) {
            const newSession = await update({
              ...session,
              user: { ...session.user, name }
            });
            console.log({ newSession });
          }
        }}
        className="flex items-center w-full max-w-sm space-x-2"
      >
        <input
          type="text"
          placeholder={session.user.name ?? ''}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default function ClientExample() {
  const { data: session, status } = useSession();
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Client Side Rendering Usage</h1>
      <p>
        This page fetches session data client side using the{' '}
        <Link href="https://auth-docs-git-feat-nextjs-auth-authjs.vercel.app/reference/nextjs/react#usesession">
          <code>useSession</code>
        </Link>{' '}
        React Hook.
      </p>
      <p>
        It needs the{' '}
        <Link href="https://react.dev/reference/react/use-client">
          <code>'use client'</code>
        </Link>{' '}
        directive at the top of the file to enable client side rendering, and the{' '}
        <Link href="https://auth-docs-git-feat-nextjs-auth-authjs.vercel.app/reference/nextjs/react#sessionprovider">
          <code>SessionProvider</code>
        </Link>{' '}
        component in{' '}
        <strong>
          <code>client-example/page.tsx</code>
        </strong>{' '}
        to provide the session data.
      </p>

      {status === 'loading' ? <div>Loading...</div> : <SessionData session={session} />}
      <UpdateForm />
    </div>
  );
}
