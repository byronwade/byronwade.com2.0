import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] });

export async function compareObjectsAndReturnBest(oldObject, newObject) {
  // Construct the prompt for comparison
  let prompt = `I have two JSON objects representing information about mushrooms. I need to create a new JSON object that combines the best aspects of both objects. Here are the objects:

  Old Object: ${JSON.stringify(oldObject, null, 2)}
  
  New Object: ${JSON.stringify(newObject, null, 2)}
  
  Create a new JSON object with the best combined content from both objects:`;

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
    console.log('response', JSON.parse(response.choices[0].content));

    if (response && response.choices && response.choices.length > 0) {
      const combinedContent = response.data.choices[0].text.trim();

      // Attempt to parse the combined content into JSON
      try {
        const newJsonObject = JSON.parse(combinedContent);
        console.log('newJsonObject', newJsonObject);
        return newJsonObject;
      } catch (parseError) {
        console.error('Error parsing AI response into JSON:', parseError);
        throw new Error('AI response could not be parsed into JSON.');
      }
    } else {
      throw new Error('Invalid response structure from OpenAI API.');
    }
  } catch (error) {
    console.error('Error in calling OpenAI to compare objects:', error);
    throw error;
  }
}
