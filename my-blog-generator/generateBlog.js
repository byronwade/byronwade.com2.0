import axios from 'axios';
import cheerio from 'cheerio';
import OpenAI from 'openai';

const websiteURL = 'https://tripsitter.com/cannabis/weed-butter/'; // Replace with the website you want to crawl
const openAIKey = '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'; // Replace with your OpenAI API key

const openai = new OpenAI({ apiKey: openAIKey });

async function fetchWebsiteContent(url) {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(`Error fetching website content: ${error}`);
    return null;
  }
}

async function extractText(html) {
  const $ = cheerio.load(html);
  const textElements = $('article').toArray(); // Adjust selector based on website's structure
  const extractedText = textElements.map((element) => $(element).text()).join(' ');
  return extractedText;
}

async function generateBlogArticle(inputText) {
  let article = '';
  let currentText = inputText;
  let attempts = 0;

  while (getWordCount(article) < 2400 && attempts < 10) {
    // Limit attempts to prevent infinite loops
    const prompt = `Write a detailed continuation of the following blog article: ${currentText}`;
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-0125',
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    const newText = response.choices[0].message.content;
    article += ` ${newText}`; // Append new text to the article
    currentText = newText; // Use the new text as the basis for the next prompt, if needed
    attempts++;
  }

  return article.trim();
}

function getWordCount(text) {
  return text.split(/\s+/).length;
}

(async () => {
  const websiteContent = await fetchWebsiteContent(websiteURL);
  if (!websiteContent) {
    console.log('Failed to fetch website content.');
    return;
  }

  const textContent = await extractText(websiteContent);
  if (!textContent) {
    console.log('Failed to extract text from website content.');
    return;
  }

  const blogArticle = await generateBlogArticle(textContent);
  if (!blogArticle) {
    console.log('Failed to generate blog article.');
    return;
  }

  console.log('Generated Blog Article:', blogArticle);
})();
