import { auth } from '../../../auth.config';
import ClientExample from '../../components/client';
import { Providers } from '../../utils/Provider';

export default async function ClientPage() {
  const session = await auth();
  if (session?.user)
    session.user = {
      name: session.user.name,
      email: session.user.email,
      picture: session.user.picture
    }; // filter out sensitive data

  return (
    <Providers session={session}>
      <ClientExample />
    </Providers>
  );
}
