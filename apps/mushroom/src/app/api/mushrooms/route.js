// import { fetchOpenAIContent } from './functions/OpenAI';
// import { fetchPageData } from './functions/webScrape/fetchPageData';
// import { findExisting } from './functions/FindExisting';
// import { updateOrInsertMushroom } from './functions/updateOrInsertMushroom';
// import { calculateConfidenceScore } from './functions/calculateConfidenceScore';
// import { compareObjectsAndReturnBest } from './functions/compareObjectsAndReturnBest';
// import { analyzeSentences, searchGoogle, searchKnowledgeGraph } from './functions/GoogleAI';
// import { getWikipediaData } from './functions/WikiAPI';

// export const runtime = 'edge'; // 'nodejs' is the default

// /**
//  * GET endpoint for the mushroom classifier.
//  *
//  * @param {Request} req - incoming HTTP request
//  * @param {URLSearchParams} searchParams - query parameters from the request URL
//  * @param {string} url - URL of the company's website, if provided
//  * @param {string} term - search term provided by the user
//  * @returns {Promise<Response>} JSON response with the OpenAI content
//  */
// export async function GET(req) {
//   const searchParams = new URL(req.url).searchParams;
//   const url = searchParams.get('url');
//   const term = searchParams.get('term');

//   try {
//     // retrieve basic company data from the provided URL
//     let business = null;
//     if (url) {
//       business = await fetchPageData(url);
//       if (!business) {
//         console.error('Failed to get basic company data');
//         return Response.json({ error: 'Failed to get basic company data' });
//       }
//     }

//     // ensure a search term was provided
//     if (!term) {
//       console.error('No search term provided');
//       return Response.json({ error: 'No search term provided' });
//     }

//     // check if the mushroom already exists in the database
//     const existingMushroomResponse = await findExisting(term);

//     // // Example sentences
//     // const sentence1 =
//     //   'The Eiffel Tower is located in Paris. And is the tallest building in the world.';
//     // const sentence2 =
//     //   "It's a sunny day. I'm happy. I'm going to the park. I'm going to play football.";

//     // analyzeSentences(sentence1, sentence2)
//     //   .then((betterSentence) => console.log(`Better Sentence: ${betterSentence}`))
//     //   .catch((err) => console.error('ERROR:', err));

//     // searchGoogle('example search term').then((results) => {
//     //   if (results) {
//     //     results.forEach((result, index) => {
//     //       console.log(`Result #${index + 1}:`);
//     //       console.log(`Title: ${result.title}`);
//     //       console.log(`Link: ${result.link}`);
//     //       console.log(`Snippet: ${result.snippet}`);
//     //       console.log('--------------------------------');
//     //     });
//     //   } else {
//     //     console.log('No results found.');
//     //   }
//     // });

//     const wikiData = await getWikipediaData(term);
//     console.log('wikiData', wikiData);

//     // retrieve OpenAI content for the search term
//     const openAIContent = await fetchOpenAIContent(wikiData, existingMushroomResponse, term);
//     console.log('openAIContent', openAIContent.openAIResponse);
//     if (!openAIContent) {
//       console.error('Failed to get OpenAI content');
//       return Response.json({ error: 'Failed to get OpenAI content' });
//     }

//     // calculate the confidence score for the OpenAI content
//     //const confidenceScore = await calculateConfidenceScore(openAIContent);
//     //console.log('calculateConfidenceScore', confidenceScore);

//     // if the mushroom already exists, update the row
//     // const mushroomId = await updateOrInsertMushroom(existingMushroomResponse, openAIContent);
//     // console.log('mushroomId', mushroomId);

//     // const best = await compareObjectsAndReturnBest(existingMushroomResponse, openAIContent);
//     // console.log('best', best);

//     return Response.json({
//       openAIContent,
//       wikiData,
//       existingMushroomResponse
//     });
//   } catch (error) {
//     console.error('API Error:', error.message);
//     return Response.json({ error: 'Internal Server Error' });
//   }
// }

import { fetchOpenAIContent } from './functions/OpenAI';
import { fetchPageData } from './functions/webScrape/fetchPageData';
import { findExisting } from './functions/FindExisting';
//import { getWikipediaData } from './functions/WikiAPI';
import { updateOrInsertMushroom } from './functions/updateOrInsertMushroom';

export async function GET(req) {
  const searchParams = new URL(req.url).searchParams;
  const url = searchParams.get('url');
  const term = searchParams.get('term');

  const responseStream = new ReadableStream({
    async start(controller) {
      try {
        if (!term) {
          controller.enqueue(JSON.stringify({ error: 'No search term provided' }));
          controller.close();
          return;
        }

        if (url) {
          const business = await fetchPageData(url);
          if (!business) {
            controller.enqueue(JSON.stringify({ error: 'Failed to get business data' }));
          } else {
            controller.enqueue(JSON.stringify({ business }));
          }
        }

        const existingMushroomResponse = await findExisting(term);
        let mushroomId = null;
        if (existingMushroomResponse) {
          const openAIContent = await fetchOpenAIContent(term);
          mushroomId = await updateOrInsertMushroom(existingMushroomResponse, openAIContent);
          console.log('mushroomId', mushroomId);
        }

        // Include the code to handle the case when the mushroom does not exist and needs to be inserted.
        // ...

        // Other code remains the same.
        // ...

      } catch (error) {
        console.error('API Error:', error.message);
        controller.enqueue(JSON.stringify({ error: 'Internal Server Error' }));
      } finally {
        controller.close();
      }
    }
  });

  return new Response(responseStream, {
    headers: { 'Content-Type': 'application/json' }
  });
}