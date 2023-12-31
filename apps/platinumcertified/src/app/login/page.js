'use client';
import { useState, useEffect } from 'react';
import { createClient } from '../../utils/supabase/client';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logs, setLogs] = useState([]);
  const [user, setUser] = useState(null);

  const supabase = createClient();

  useEffect(() => {
    const updateSession = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      console.log('user', user);
      setUser(user || null);
    };

    updateSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('event', event);
      console.log('session', session);
      setUser(session?.user || null);
      setLogs((prevLogs) => [...prevLogs, { event, session }]);
    });

    if (window.location.pathname === '/auth/callback') {
      updateSession();
    }

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase.auth]);

  const handleSignUp = async () => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    });
    setLogs((prevLogs) => [...prevLogs, { action: 'Sign Up', user, error }]);
  };

  const handleSignIn = async () => {
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    setLogs((prevLogs) => [...prevLogs, { action: 'Sign In', user, error }]);
  };

  const handleSignInGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    });
    setLogs((prevLogs) => [...prevLogs, { action: 'Sign In', data, error }]);
    console.log(data.url);
  };

  const handleSignInTwitter = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'twitter',
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    });
    setLogs((prevLogs) => [...prevLogs, { action: 'Sign In', data, error }]);
    console.log(data.url);
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    setLogs((prevLogs) => [...prevLogs, { action: 'Sign Out', error }]);
  };

  return (
    <div className="flex flex-col text-white">
      <div>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignInGithub}>Github</button>
        <button onClick={handleSignInTwitter}>Twitter</button>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
      {user ? <p>Logged in as {user.email}</p> : <p>Not logged in</p>}
      <div className="block text-white bg-black">
        <h3>Logs:</h3>
        <pre>{JSON.stringify(logs, null, 2)}</pre>
      </div>
    </div>
  );
}
