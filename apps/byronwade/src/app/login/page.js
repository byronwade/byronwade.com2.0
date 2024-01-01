'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/components/ui/use-toast';
import { createClient } from '../../lib/supabase/client';

import { ToastAction } from '@/components/ui/toast';

// Form validation schemas
const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' })
});

const signupSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Confirm password must be at least 6 characters' })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  });

export default function Login() {
  const supabase = createClient();
  const { toast } = useToast();
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

  // Set default values for login form fields
  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: ''
    }
  });

  // Set default values for signup form fields
  const signupForm = useForm({
    resolver: zodResolver(signupSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmitLogin = async (data) => {
    const { data: user, error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password
    });
    if (error) {
      console.error('Login error:', error.message);
    } else {
      console.log('Login successful:', user);
    }
  };

  const onSubmitSignup = async (data) => {
    const { data: user, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password
    });
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message,
        action: <ToastAction altText="Login">Login</ToastAction>
      });
      console.error('Signup error:', error.message);
    } else {
      toast({
        variant: 'destructive',
        title: 'Successful',
        description: user.user.email
        // action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
      });
      console.log('Signup successful:', user);
    }
  };

  const handleOAuthLogin = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    });
    if (error) console.error('OAuth error:', error.message);
  };

  if (isLoading) {
    return <div className="w-[400px] mx-auto mt-10">Loading...</div>; // Replace with your loading indicator
  }

  if (session) {
    return (
      <div className="w-[400px] mx-auto mt-10">
        <Link href="/">
          <Button className="w-full mb-4 text-black bg-white dark:bg-black dark:text-white">
            go back
          </Button>
        </Link>
        <p className="p-4 mb-4 text-black bg-white rounded-md">
          Currently logged in as {session.user.user_metadata.full_name || session.user.email}!
        </p>
        <Button
          onClick={async () => await supabase.auth.signOut()}
          className="w-full text-black bg-white dark:bg-black dark:text-white"
        >
          Sign out
        </Button>
      </div>
    );
  }

  return (
    <>
      <Tabs defaultValue="account" className="mx-auto mt-10 w-[400px]">
        <TabsList className="grid w-full grid-cols-2 bg-black">
          <TabsTrigger
            value="account"
            className="data-[state=active]:bg-white data-[state=active]:text-black"
          >
            Login
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="data-[state=active]:bg-white  data-[state=active]:text-black"
          >
            Signup
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <form onSubmit={loginForm.handleSubmit(onSubmitLogin)} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Controller
                name="email"
                control={loginForm.control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input id="email" type="email" {...field} />
                    {error && <p>{error.message}</p>}
                  </>
                )}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Controller
                name="password"
                control={loginForm.control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input id="password" type="password" {...field} />
                    {error && <p>{error.message}</p>}
                  </>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full text-black bg-white dark:bg-black dark:text-white"
            >
              Login
            </Button>
            <div className="flex flex-row justify-between gap-4 mt-4">
              <Button
                onClick={() => handleOAuthLogin('github')}
                className="w-full text-black bg-white dark:bg-black dark:text-white"
              >
                Login with GitHub
              </Button>
              <Button
                onClick={() => handleOAuthLogin('twitter')}
                className="w-full text-black bg-white dark:bg-black dark:text-white"
              >
                Login with Twitter
              </Button>
            </div>
          </form>
        </TabsContent>

        <TabsContent value="password">
          <form onSubmit={signupForm.handleSubmit(onSubmitSignup)} className="space-y-4">
            <div>
              <Label htmlFor="signup-email">Email</Label>
              <Controller
                name="email"
                control={signupForm.control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input id="signup-email" type="email" {...field} />
                    {error && <p>{error.message}</p>}
                  </>
                )}
              />
            </div>
            <div>
              <Label htmlFor="signup-password">Password</Label>
              <Controller
                name="password"
                control={signupForm.control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input id="signup-password" type="password" {...field} />
                    {error && <p>{error.message}</p>}
                  </>
                )}
              />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Controller
                name="confirmPassword"
                control={signupForm.control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input id="confirm-password" type="password" {...field} />
                    {error && <p>{error.message}</p>}
                  </>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full text-black bg-white dark:bg-black dark:text-white"
            >
              Signup
            </Button>
            <div className="flex flex-row justify-between gap-4 mt-4">
              <Button
                onClick={() => handleOAuthLogin('github')}
                className="w-full text-black bg-white dark:bg-black dark:text-white"
              >
                Signup with GitHub
              </Button>
              <Button
                onClick={() => handleOAuthLogin('twitter')}
                className="w-full text-black bg-white dark:bg-black dark:text-white"
              >
                Signup with Twitter
              </Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </>
  );
}
