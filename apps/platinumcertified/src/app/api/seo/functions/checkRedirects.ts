// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkRedirects = async (domain: string): Promise<any> => {
  try {
    const url = domain.startsWith('http') ? domain : `https://${domain}`;
    const parsedUrl = new URL(url); // This will throw if URL is invalid

    const response = await fetch(parsedUrl.href, { redirect: 'manual' });
    const isRedirected = response.type === 'opaqueredirect';

    return { isRedirected };
  } catch (error) {
    console.error(`Error checking redirects for ${domain}:`, error);
    return { error: error.toString() };
  }
};
