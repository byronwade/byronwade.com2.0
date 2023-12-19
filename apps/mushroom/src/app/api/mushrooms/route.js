import { fetchOpenAIContent } from './functions/OpenAI';
import { fetchPageData } from './functions/webScrape/fetchPageData';
import { findExistingCommonName } from './functions/FindExisting';
import { updateOrInsertMushroom } from './functions/updateOrInsertMushroom';
import { calculateConfidenceScore } from './functions/calculateConfidenceScore';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');
  const term = searchParams.get('term');

  try {
    let business = null;

    if (url) {
      business = await fetchPageData(url);
      if (!business) {
        console.error('Failed to get basic company data');
        return Response.json({ error: 'Failed to get basic company data' });
      }
    }

    if (!term) {
      console.error('No search term provided');
      return Response.json({ error: 'No search term provided' });
    }

    const openAIContent = await fetchOpenAIContent(business, term);
    console.log('openAIContent', openAIContent);
    if (!openAIContent) {
      console.error('Failed to get OpenAI content');
      return Response.json({ error: 'Failed to get OpenAI content' });
    }

    // Check if mushroom already exists
    const existingMushroomResponse = await findExistingCommonName(term);

    //const confidenceScore = await calculateConfidenceScore(openAIContent);
    //console.log('calculateConfidenceScore', confidenceScore);

    // If the mushroom already exists, update the row
    const mushroomId = await updateOrInsertMushroom(existingMushroomResponse, openAIContent);
    console.log('mushroomId', mushroomId);

    return Response.json({
      openAIContent
    });
  } catch (error) {
    console.error('API Error:', error.message);
    return Response.json({ error: 'Internal Server Error' });
  }
}
