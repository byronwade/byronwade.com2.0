import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] });

export const getEmbedding = async (text) => {
  try {
    const response = await openai.createEmbedding({
      model: 'text-embedding-ada-002',
      input: text
    });
    return response.data.data[0].embedding;
  } catch (error) {
    console.error('Error in getEmbedding:', error);
    return null;
  }
};
