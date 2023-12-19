import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] });

export async function fetchOpenAIContent(businessData) {
  // Default JSON structure
  let openAIContent = {
    name: null,
    description: null,
    phone: null,
    email: null,
    address: null,
    industry: null,
    founded: null,
    headquartersAddress: null,
    categories: [
      { alias: null, title: null },
      { alias: null, title: null },
      { alias: null, title: null }
    ],
    sentimentScore: null,
    brandConsistencyScore: null,
    googleQuery: businessData?.websiteData?.checkMetadata?.title || null
  };

  const combinedData = {
    checkMetadata: businessData.websiteData.checkMetadata,
    companyData: businessData.websiteData.companyData
  };

  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are a professional business analysis AI designed to get the most accurate data on businesses and output it in JSON format.
    
            Based on the provided data, generate a comprehensive analysis of the company, including:
            - Company Name - prioratize the metadata title, if not available use the company name from the companyData
            - Short Description - 3-4 sentences and if you cand find any data based on the data provided come up with a short description
            - Business Address as a string - based on the data from the addresses: [] array find the most relevant address
            - Company Phone Number - based on the data from the phones: [] array find the most relevant email
            - Company Email - based on the data from the emails: [] array find the most relevant email
            - Categories - make sure theres always at least 3 and each one has an alias and title
            - Google Query - Create a google query based on the data provided, this query should search for the company name and address and return the most relevant result so add the details you think are nesissarry for google to find the company.
    
            Additionally, provide detailed analytical insights such as:
            - Sentiment Score - always provide a score between 0 and 10
            - Brand Consistency Score - always provide a score between 0 and 10
    
            Ensure the output is structured in JSON format as shown below:
            {
              "name": "",
              "description": "",
              "phone": "",
              "email": "",
              "address": "",
              industry: null,
              founded: null,
              headquartersAddress: null,
              "categories": [
                { alias: '', title: '' },
                { alias: '', title: '' },
                { alias: '', title: '' },
              ],
              "sentimentScore": "",
              "brandConsistencyScore": "",
              "googleQuery": "",
            }
            if no data is available for a field, leave it as null`
        },
        {
          role: 'user',
          content: JSON.stringify(combinedData) // Ensure this is a string
        }
      ],
      model: 'gpt-3.5-turbo-1106',
      response_format: { type: 'json_object' }
    });

    const openAIResponse = JSON.parse(response.choices[0].message.content);
    // Update the default structure with OpenAI response data
    openAIContent = {
      ...openAIContent,
      ...openAIResponse,
      googleQuery: openAIResponse.googleQuery
    };

    // Cost calculation for gpt-3.5-turbo-1106
    const inputCostPerThousandTokens = 0.001;
    const outputCostPerThousandTokens = 0.002;
    const tokenCount = response.usage.total_tokens;
    const openAIEstimatedCost =
      (tokenCount / 1000) * (inputCostPerThousandTokens + outputCostPerThousandTokens);

    return {
      openAIContent,
      openAIEstimatedCost
    };
  } catch (error) {
    console.error('Error in OpenAI API call:', error);
    return {
      openAIContent, // Return default structure in case of an error
      openAIEstimatedCost: null
    };
  }
}
