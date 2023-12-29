import Auth from '@auth/core';
import Credentials from '@auth/core/providers/credentials';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  // Convert the Next.js request to a standard Request object
  const standardRequest = new Request(request);
  const credentials = await request.json();

  const response = await Auth(standardRequest, {
    providers: [
      Credentials({
        credentials: {
          username: { label: 'Username' },
          password: { label: 'Password', type: 'password' }
        },
        async authorize() {
          const { username, password } = credentials;

          // Query the database for the user
          const { rows } = await sql`SELECT * FROM users WHERE username = ${username}`;
          const user = rows[0];

          if (!user) return null;

          // Verify password (assuming the password in the db is hashed)
          const isValid = bcrypt.compareSync(password, user.password);
          if (!isValid) return null;

          return { id: user.id, name: user.name, email: user.email };
        }
      })
    ],
    trustHost: true
  });

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
