import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] });

export async function compareObjectsAndReturnBest(oldObject, newObject) {
  // Construct the prompt for comparison
  let prompt = `I am comparing two pieces of content based on the following criteria: clarity, depth of information, and relevance to the topic of mushrooms and mycology. Here are the two contents:

  Old Content: ${oldObject.content}
  
  New Content: ${newObject.content}
  
  Given these criteria, which content is better, update the JSON object keeping all the keys and making sure to fill all information available. The output should be in the exact same structure as the 2 objects being compared`;

  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: prompt
        }
      ],
      model: 'gpt-3.5-turbo-1106',
      response_format: { type: 'json_object' }
    });

    if (response && response.data && response.data.choices && response.data.choices.length > 0) {
      let chosenObject = response.data.choices[0].text.includes('Old Content is better')
        ? oldObject
        : newObject;

      return {
        ...chosenObject,
        comparisonResult: response.data.choices[0].text.trim()
      };
    } else {
      throw new Error('Invalid response structure from OpenAI API.');
    }
  } catch (error) {
    console.error('Error in calling OpenAI to compare objects:', error);
    throw error;
  }
}
