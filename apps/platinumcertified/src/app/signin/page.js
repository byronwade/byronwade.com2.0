import { signIn } from '../../../auth.config';

export default function Layout() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github');
      }}
    >
      <button>Sign in with GitHub</button>
    </form>
  );
}
