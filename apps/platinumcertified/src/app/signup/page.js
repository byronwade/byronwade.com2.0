'use client';
import React, { useState } from 'react';
import { createClient } from '../../utils/supabase/client';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const supabase = createClient();

  const handleSignup = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Signup successful! Check your email for a confirmation link.');
    }
    console.log(data, error);
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Sign Up</button>
      {message && <p>{message}</p>}
    </form>
  );
}
