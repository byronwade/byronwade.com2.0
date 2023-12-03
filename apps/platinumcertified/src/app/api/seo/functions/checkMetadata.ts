// title: { value: null, exists: false, characterCount: 0 },
// description: { value: null, exists: false, characterCount: 0 },
// ogTitle: { value: null, exists: false, characterCount: 0 },
// ogDescription: { value: null, exists: false, characterCount: 0 },
// twitterTitle: { value: null, exists: false, characterCount: 0 },
// twitterDescription: { value: null, exists: false, characterCount: 0 },
// fbTitle: { value: null, exists: false, characterCount: 0 },
// fbDescription: { value: null, exists: false, characterCount: 0 },
// author: { value: null, exists: false, characterCount: 0 },
// keywords: { value: null, exists: false, characterCount: 0 },
// canonicalURL: { value: null, exists: false, characterCount: 0 },
// publishedDate: { value: null, exists: false, characterCount: 0 },
// language: { value: null, exists: false },
// viewport: { value: null },
// userAgent: { value: null },
// wordCount: 0,
// urlLength: 0,
// favicon: null,
// googleVerification: null,
// schemaData: {},
// ampLink: null

export async function checkMetadata(htmlString) {
  const getMetaContent = (name) => {
    const regex = new RegExp(
      `<meta\\s+(?:name|property)=["']${name}["']\\s+content=["']([^<]+)["']`,
      'i'
    );
    const match = htmlString.match(regex);
    return match ? match[1] : null;
  };
  const getTitleContent = () => {
    const regex = /<title>(.*?)<\/title>/i;
    const match = htmlString.match(regex);
    return match ? match[1] : null;
  };

  const extractData = (content) => ({
    value: content,
    exists: content !== null,
    characterCount: content ? content.length : 0
  });

  // Title and Description already handled in previous example
  const title = getTitleContent() || getMetaContent('title') || getMetaContent('og:title') || null;
  const description = getMetaContent('description') || getMetaContent('og:description') || null;
  const ogTitle = getMetaContent('og:title');
  const ogDescription = getMetaContent('og:description');
  const twitterTitle = getMetaContent('twitter:title');
  const twitterDescription = getMetaContent('twitter:description');
  const fbTitle = getMetaContent('fb:title'); // Note: Facebook specific tags might not be standard
  const fbDescription = getMetaContent('fb:description');
  const author = getMetaContent('author');
  const keywords = getMetaContent('keywords');
  const canonicalURL = getMetaContent('canonical');
  const publishedDate = getMetaContent('article:published_time'); // or another relevant property
  // Language, viewport, userAgent, etc. are not typically found in meta tags

  // Additional fields
  const language = htmlString.match(/<html[^>]*lang=["'](.*?)["']/i)?.[1] || null;
  const wordCount = (htmlString.match(/\b\w+\b/g) || []).length;
  const urlLength = getMetaContent('og:url')?.length || 0; // Assuming the URL is provided in a meta tag
  const favicon = getMetaContent('icon') || getMetaContent('shortcut icon');
  const googleVerification = getMetaContent('google-site-verification');
  const getScriptJsonContent = (type) => {
    const regex = new RegExp(`<script\\s+type=["']${type}["']>([\\s\\S]*?)<\\/script>`, 'gi');
    const scripts = [];
    let match;
    while ((match = regex.exec(htmlString)) !== null) {
      try {
        scripts.push(JSON.parse(match[1].trim()));
      } catch (error) {
        console.warn('Error parsing JSON-LD script:', error.message);
      }
    }
    return scripts;
  };

  const ampLinkRegex = /<link\s+rel=["']amphtml["']\s+href=["'](.*?)["']/i;
  const ampLinkMatch = htmlString.match(ampLinkRegex);

  const schemaData = getScriptJsonContent('application/ld\\+json');
  const ampLink = ampLinkMatch ? ampLinkMatch[1] : null;

  return {
    title: extractData(title),
    description: extractData(description),
    ogTitle: extractData(ogTitle),
    ogDescription: extractData(ogDescription),
    twitterTitle: extractData(twitterTitle),
    twitterDescription: extractData(twitterDescription),
    fbTitle: extractData(fbTitle),
    fbDescription: extractData(fbDescription),
    author: extractData(author),
    keywords: extractData(keywords),
    canonicalURL: extractData(canonicalURL),
    publishedDate: extractData(publishedDate),
    language: {
      value: language,
      exists: language !== null
    },
    wordCount,
    urlLength,
    favicon: {
      value: favicon,
      exists: favicon !== null
    },
    googleVerification: {
      value: googleVerification,
      exists: googleVerification !== null
    },
    schemaData,
    ampLink: {
      value: ampLink,
      exists: ampLink !== null
    }
  };
}
