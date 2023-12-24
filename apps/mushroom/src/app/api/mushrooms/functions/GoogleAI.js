import language from '@google-cloud/language';
import { google } from 'googleapis';

async function analyzeSentences(sentence1, sentence2) {
  const client = new language.LanguageServiceClient();

  // Helper function to analyze a sentence
  const analyze = async (sentence) => {
    const document = {
      content: sentence,
      type: 'PLAIN_TEXT'
    };
    const [result] = client.analyzeEntities({ document }); // Added await
    return result;
  };

  // Analyze both sentences
  const analysis1 = await analyze(sentence1);
  const analysis2 = await analyze(sentence2);

  // Example criteria: number of entities and magnitude of sentiment (if available)
  const score1 = analysis1.entities.length + (analysis1.documentSentiment?.magnitude || 0);
  const score2 = analysis2.entities.length + (analysis2.documentSentiment?.magnitude || 0);

  // Compare and return the better sentence
  return score1 > score2 ? sentence1 : sentence2;
}

async function searchGoogle(query) {
  const customsearch = google.customsearch('v1');

  try {
    const response = await customsearch.cse.list({
      cx: process.env.GOOGLE_CSE_ID, // Use environment variable
      q: query,
      auth: process.env.GOOGLE_API_KEY // Use environment variable
    });

    return response.data.items;
  } catch (error) {
    console.error('Error during search:', error);
    return null;
  }
}

export { analyzeSentences, searchGoogle };
