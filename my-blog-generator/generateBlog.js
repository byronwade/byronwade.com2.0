import axios from 'axios';
import cheerio from 'cheerio';
import OpenAI from 'openai';
import fs from 'fs';

const openAIKey = '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'; // Replace with your OpenAI API key
const websiteURLs = [
  'https://tripsitter.com/cannabis/weed-butter/',
  'https://tripsitter.com/cannabis/habitat/',
  'https://tripsitter.com/cannabis/detox/',
  'https://tripsitter.com/cannabis/appetite/',
  'https://tripsitter.com/cannabis/legal/usa/',
  'https://tripsitter.com/kratom/potentiators/'
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

async function extractDetails(html) {
  const $ = cheerio.load(html);
  const title = $('title').text(); // Extract title
  const textElements = $('article').toArray(); // Adjust selector based on website's structure
  const extractedText = textElements.map((element) => $(element).text()).join(' ');
  console.log('Extracted Text:', extractedText);
  console.log('Title:', title);
  return { title, extractedText };
}

async function generateBlogArticle(textContent) {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-0125',
    response_format: { type: 'json_object' },
    messages: [
      {
        role: 'user',
        content: `Convert the following content into a complete, well-structured blog post in HTML format. Ensure the content:
        
        1) Is wrapped in a <div> element as the topmost HTML wrapper, including all articles within that div.
        2) Aims to reach a length of around 2400 words to maximize detail and depth.
        3) Mentions our company subtly, perhaps at the bottom as a plug or an ad.
        4) Incorporates images from online sources (excluding tripsetter images), with placeholders for image URLs where necessary.
        
        ${textContent}

        outputted data should be formatted as JSON like this:

        {
          title: 'My Blog Post',
          content: '<div>
            <h1>Information</h1>
            <p>Information</p>
            <p>Information</p>
            <p>Information</p>
            <p>Information</p>
            <p>Information</p>
            <p>Information</p>
            <ul>
            <li>data</li>
            <li>data</li>
            <li>data</li>
            </ul>
          </div>'
        }
        
        `
      }
    ]
  });
  return response.choices[0].message.content;
}

async function processBatch(batch) {
  const results = [];

  for (const url of batch) {
    console.log(`Processing URL: ${url}`);
    const websiteContent = await fetchWebsiteContent(url);
    if (!websiteContent) continue;

    const { title, extractedText } = await extractDetails(websiteContent);
    if (!extractedText) continue;

    const blogArticle = await generateBlogArticle(extractedText);
    console.log('blogArticle: ', blogArticle);
    if (!blogArticle) {
      console.log(`Failed to generate blog article for ${url}.`);
      continue;
    }

    console.log(`Generated Blog Article for ${url}:`, blogArticle);
    results.push({ title, url, content: blogArticle });
  }

  return results;
}

async function processURLsInBatches(urls, batchSize = 10) {
  const allResults = [];

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchResults = await processBatch(batch);
    allResults.push(...batchResults);
  }

  return allResults;
}

function saveResultsToCSV(results) {
  const header = 'Title,URL,Content\n';
  const csvContent = results.reduce((acc, { title, url, content }) => {
    // Prepare HTML content to be CSV friendly: escape quotes and ensure it is encapsulated correctly
    const preparedContent = `"${content.replace(/"/g, '""').replace(/\n/g, ' ')}"`.replace(
      /[\r\n]+/g,
      ' '
    );
    const csvRow = `"${title.replace(/"/g, '""')}","${url}",${preparedContent}\n`;
    return acc + csvRow;
  }, header);

  fs.writeFile('output.csv', csvContent, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

(async () => {
  const results = await processURLsInBatches(websiteURLs);
  saveResultsToCSV(results);
})();
