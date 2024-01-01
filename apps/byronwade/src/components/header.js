'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// user auth
import { createClient } from '@/lib/supabase/client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Header() {
  const supabase = createClient();
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // New loading state

  useEffect(() => {
    const updateSession = async () => {
      setIsLoading(true); // Start loading
      try {
        const { data: user, error } = await supabase.auth.getUser();
        if (error) throw error;
        console.log('user', user);
      } catch (error) {
        console.error('Error fetching user:', error.message);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    updateSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('event', event);
      console.log('session', session);
      setSession(session || null);
      setIsLoading(false); // Stop loading when session is updated
    });

    if (window.location.pathname === '/auth/callback') {
      updateSession();
    }

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase.auth]);

  return (
    <div className="flex flex-row items-center justify-between w-full p-4 mt-4 bg-black rounded-md">
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Contact</Link>
      </div>
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-30 bg-black border-0">
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={async () => await supabase.auth.signOut()}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
}
