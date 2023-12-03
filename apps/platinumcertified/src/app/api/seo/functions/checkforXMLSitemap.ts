function parseSitemap(sitemapText: string): string[] {
  // Example implementation (you will need to replace this with actual XML parsing logic)
  const urlMatches = sitemapText.match(/<loc>(.*?)<\/loc>/g);
  return urlMatches ? urlMatches.map((url) => url.replace(/<\/?loc>/g, '')) : [];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkForXMLSitemap = async (domain: string): Promise<Record<string, any>> => {
  const commonSitemapPaths = ['/sitemap.xml', '/sitemap_index.xml'];
  const result = {
    hasSitemap: false,
    sitemapUrl: '',
    sitemapLocationsChecked: commonSitemapPaths.slice()
  };

  // Ensure the domain includes a protocol
  const baseDomain = domain.startsWith('http') ? domain : `https://${domain}`;

  // Fetch sitemaps in parallel
  const fetchPromises = commonSitemapPaths.map(async (path) => {
    const sitemapUrl = new URL(path, baseDomain).toString();
    try {
      const response = await fetch(sitemapUrl);

      if (response.ok) {
        const sitemapText = await response.text();
        const urls = parseSitemap(sitemapText);

        return {
          sitemapUrl,
          sitemapData: {
            urls,
            totalUrls: urls.length
          }
        };
      }
    } catch (error) {
      // Handle error (e.g., network issue)
    }

    return null;
  });

  // Await all fetch results
  const fetchResults = await Promise.all(fetchPromises);

  // Find the first valid sitemap
  const validSitemap = fetchResults.find((result) => result !== null);

  if (validSitemap) {
    result.hasSitemap = true;
    result.sitemapUrl = validSitemap.sitemapUrl;
    //result.sitemapData = validSitemap.sitemapData;
  }

  return result;
};
