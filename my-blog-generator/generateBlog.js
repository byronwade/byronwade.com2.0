import axios from 'axios';
import cheerio from 'cheerio';
import OpenAI from 'openai';

const openAIKey = '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'; // Replace with your OpenAI API key

const websiteURLs = [
  'https://tripsitter.com/cannabis/weed-butter/',
  'https://example.com/another-article'
  // Add more URLs as needed
];

const openai = new OpenAI({ apiKey: openAIKey });

async function fetchWebsiteContent(url) {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(`Error fetching website content from ${url}: ${error}`);
    return null;
  }
}

async function extractText(html) {
  const $ = cheerio.load(html);
  const textElements = $('article').toArray(); // Adjust selector based on website's structure
  const extractedText = textElements.map((element) => $(element).text()).join(' ');
  return extractedText;
}

async function generateBlogArticle(textContent) {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-0125',
    messages: [
      {
        role: 'user',
        content: `Write a compleate redo of all of this content: ${textContent}
        
        1) The content should be HTML the top most html wrapper should be div and all the article inside of that div
        2) The blog post should utalize as much worddage as the output will allow, we need our blogs to reach 2400 words
        3) Our company should be mentioned in the blog, mabye at the bottom as a plug for the company or an ad
        4) Use images from online to add into the article, use images from google, do not use images from tripsetter`
      }
    ]
  });

  return response.choices[0].message.content;
}

async function processBatch(batch) {
  for (const url of batch) {
    console.log(`Processing URL: ${url}`);
    const websiteContent = await fetchWebsiteContent(url);
    if (!websiteContent) continue;

    const textContent = await extractText(websiteContent);
    if (!textContent) continue;

    const blogArticle = await generateBlogArticle(textContent);
    if (!blogArticle) {
      console.log(`Failed to generate blog article for ${url}.`);
      continue;
    }

    console.log(`Generated Blog Article for ${url}:`, blogArticle);
    // Potential saving to a file or database here
  }
}

async function processURLsInBatches(urls, batchSize = 10) {
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    await processBatch(batch);
  }
}

(async () => {
  await processURLsInBatches(websiteURLs);
})();
