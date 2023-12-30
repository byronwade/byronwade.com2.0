import { handlers } from '../../../../../auth.config';

const { GET: AuthGET, POST } = handlers;
export { POST };

// Showcasing advanced initialization in Route Handlers
export async function GET(request) {
  // Do something with request
  const response = await AuthGET(request);
  // Do something with response
  return response;
}
