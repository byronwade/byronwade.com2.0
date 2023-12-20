import { fetchOpenAIContent } from './functions/OpenAI';
import { fetchPageData } from './functions/webScrape/fetchPageData';
import { findExisting } from './functions/FindExisting';
import { updateOrInsertMushroom } from './functions/updateOrInsertMushroom';
import { calculateConfidenceScore } from './functions/calculateConfidenceScore';
import { compareObjectsAndReturnBest } from './functions/compareObjectsAndReturnBest';

/**
 * GET endpoint for the mushroom classifier.
 *
 * @param {Request} req - incoming HTTP request
 * @param {URLSearchParams} searchParams - query parameters from the request URL
 * @param {string} url - URL of the company's website, if provided
 * @param {string} term - search term provided by the user
 * @returns {Promise<Response>} JSON response with the OpenAI content
 */
export async function GET(req) {
  const searchParams = new URL(req.url).searchParams;
  const url = searchParams.get('url');
  const term = searchParams.get('term');

  try {
    // retrieve basic company data from the provided URL
    let business = null;
    if (url) {
      business = await fetchPageData(url);
      if (!business) {
        console.error('Failed to get basic company data');
        return Response.json({ error: 'Failed to get basic company data' });
      }
    }

    // ensure a search term was provided
    if (!term) {
      console.error('No search term provided');
      return Response.json({ error: 'No search term provided' });
    }

    // check if the mushroom already exists in the database
    const existingMushroomResponse = await findExisting(term);

    // retrieve OpenAI content for the search term
    const openAIContent = await fetchOpenAIContent(business, existingMushroomResponse, term);
    console.log('openAIContent', openAIContent);
    if (!openAIContent) {
      console.error('Failed to get OpenAI content');
      return Response.json({ error: 'Failed to get OpenAI content' });
    }

    // calculate the confidence score for the OpenAI content
    //const confidenceScore = await calculateConfidenceScore(openAIContent);
    //console.log('calculateConfidenceScore', confidenceScore);

    // if the mushroom already exists, update the row
    const mushroomId = await updateOrInsertMushroom(existingMushroomResponse, openAIContent);
    console.log('mushroomId', mushroomId);

    // compareObjectsAndReturnBest(existingMushroomResponse, openAIContent)
    //   .then((result) => {
    //     console.log('The better object based on the criteria:', result);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });

    // return the OpenAI content
    return Response.json({
      openAIContent
    });
  } catch (error) {
    console.error('API Error:', error.message);
    return Response.json({ error: 'Internal Server Error' });
  }
}
