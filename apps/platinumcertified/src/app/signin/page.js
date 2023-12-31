'use client';
import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logs, setLogs] = useState([]);
  const [user, setUser] = useState(null);

  const supabase = createClientComponentClient();

  useEffect(() => {
    const { data: session } = supabase.auth.getSession();
    setUser(session?.user || null);

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      setLogs((prevLogs) => [...prevLogs, { event, session }]);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

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
