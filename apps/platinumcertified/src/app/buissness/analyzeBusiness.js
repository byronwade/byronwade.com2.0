'use server';
import OpenAI from 'openai';
import {
  readJSONFromStream,
  blobToDataURI,
  createGoogleMapsLink
} from '../../app/api/seo/utils/utils';

const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] });

async function fetchGooglePlacesData(query) {
  if (!query) {
    throw new Error('Query for Google Places API is empty');
  }
  try {
    const response = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': process.env['GOOGLE_PLACES_API_KEY'],
        'X-Goog-FieldMask': '*'
      },
      body: JSON.stringify({ textQuery: query, languageCode: 'en' })
    });

    return await response?.json();
  } catch (error) {
    console.error('Error fetching Google Places Data:', error.message);
    return null;
  }
}

async function fetchOpenAIContent(businessData) {
  const combinedData = {
    checkMetadata: businessData.websiteData.checkMetadata,
    companyData: businessData.websiteData.companyData
  };
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

  return JSON.parse(response.choices[0].message.content);
}

async function fetchYelpData(parsedContent, business, googlePlacesData) {
  if (!parsedContent || !business) {
    throw new Error('Invalid input for fetching Yelp data');
  }
  if (!googlePlacesData || !googlePlacesData.places || googlePlacesData.places.length === 0) {
    console.log('googlePlacesData inside yelp', googlePlacesData);
    return null;
  }

  let yelpCategoryAliases = parsedContent?.categories.map((cat) => cat.alias).join(',');

  const options = {
    method: 'GET',
    headers: { accept: 'application/json', Authorization: process.env['YELP_API'] }
  };

  let formattedAddress = parsedContent?.address || ''; // Default to parsedContent address or empty string
  if (
    googlePlacesData &&
    googlePlacesData.places &&
    googlePlacesData.places.length > 0 &&
    googlePlacesData.places[0].formattedAddress
  ) {
    formattedAddress = googlePlacesData.places[0].formattedAddress;
  }

  // If formattedAddress is still empty, handle accordingly
  if (!formattedAddress) {
    console.error('No valid address found');
    return null;
  }

  const url = `https://api.yelp.com/v3/businesses/search?location=${formattedAddress}&term=${
    parsedContent?.name || business.websiteData.checkMetadata.title
  }&categories=${yelpCategoryAliases}&sort_by=best_match&limit=1`;

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error fetching Yelp data: HTTP status ${response.status}`);
    }

    const yelpData = await response.json();
    //console.log('Yelp Data', yelpData.businesses[0]);

    // Fetch Yelp Reviews
    const reviewResponse = await fetch(
      `https://api.yelp.com/v3/businesses/${yelpData.businesses[0].id}/reviews?limit=50&sort_by=yelp_sort`,
      options
    );

    if (!reviewResponse.ok) {
      throw new Error(`Error fetching Yelp reviews: HTTP status ${reviewResponse.status}`);
    }

    const yelpReviews = await reviewResponse.json();
    //console.log('Yelp reviews:', yelpReviews);

    return {
      yelpData: yelpData?.businesses[0],
      yelpReviews: yelpReviews?.reviews
    };
  } catch (error) {
    console.error('Error in fetching Yelp data:', error);
    return null; // or handle the error as needed
  }
}

export async function analyzeBusiness(url) {
  if (!url) {
    throw new Error('URL for business analysis is not provided');
  }

  try {
    const businessData = await fetch(`${process.env['API_URL']}/api/seo?url=${url}`);
    const business = await readJSONFromStream(businessData.body);
    const openAIContent = await fetchOpenAIContent(business);
    const query = openAIContent.address
      ? `${openAIContent?.name || business?.websiteData?.checkMetadata?.title} at ${
          openAIContent?.address
        }`
      : openAIContent?.name || business?.websiteData?.checkMetadata?.title;

    console.log('openAIContent', openAIContent);
    console.log('google query', openAIContent?.googleQuery);

    const googlePlacesData = openAIContent
      ? await fetchGooglePlacesData(openAIContent?.googleQuery || query)
      : '';

    console.log('googlePlacesData', googlePlacesData);

    const yelp = openAIContent
      ? await fetchYelpData(openAIContent, business, googlePlacesData)
      : '';
    console.log('yelp', yelp);

    let finalOutput = {
      // Default values
      screenshot: blobToDataURI(business.websiteData.takeScreenshot),
      name: openAIContent?.name || null,
      description: openAIContent?.description || null,
      website: url || null,
      phone: openAIContent?.phone || null,
      email: openAIContent?.email || null,
      address: openAIContent?.address || null,
      categories: openAIContent?.categories || null,
      sentimentScore: openAIContent?.sentimentScore || null,
      brandConsistencyScore: openAIContent?.brandConsistencyScore || null,
      googleQuery: openAIContent?.googleQuery || null,
      googleMapsLink: null,
      yelpRatingCount: null,
      yelpRating: null,
      googleRating: null,
      googleRatingCount: null,
      regularOpeningHours: null,
      currentOpeningHours: null,
      businessStatus: null,
      coordinates: null,
      location: null,
      googleReviews: null,
      yelpReviews: null,
      photos: null,
      image_url: null
    };

    if (yelp && yelp.yelpData) {
      finalOutput = {
        ...finalOutput,
        name: yelp.yelpData.name || finalOutput.name,
        phone: yelp.yelpData.display_phone || finalOutput.phone,
        image_url: yelp.yelpData.image_url || finalOutput.image_url,
        yelpRatingCount: yelp.yelpData.review_count || finalOutput.yelpRatingCount,
        yelpRating: yelp.yelpData.rating || finalOutput.yelpRating,
        photos: yelp.yelpData.photos || finalOutput.photos,
        yelpReviews: yelp.yelpReviews || finalOutput.yelpReviews,
        categories: finalOutput.categories || yelp.yelpData.categories
      };
    }

    if (googlePlacesData && googlePlacesData.places && googlePlacesData.places.length > 0) {
      finalOutput = {
        ...finalOutput,
        name: googlePlacesData?.places[0]?.displayName?.text || finalOutput.name,
        phone: googlePlacesData?.places[0]?.nationalPhoneNumber || finalOutput.phone,
        address: googlePlacesData?.places[0]?.formattedAddress || finalOutput.address,
        googleRating: googlePlacesData?.places[0]?.rating || finalOutput.googleRating,
        googleRatingCount:
          googlePlacesData?.places[0]?.userRatingCount || finalOutput.googleRatingCount,
        businessStatus: googlePlacesData?.places[0]?.businessStatus || finalOutput.businessStatus,
        coordinates: googlePlacesData?.places[0]?.location || finalOutput.coordinates,
        regularOpeningHours:
          googlePlacesData?.places[0]?.regularOpeningHours || finalOutput.regularOpeningHours,
        currentOpeningHours:
          googlePlacesData?.places[0]?.currentOpeningHours || finalOutput.currentOpeningHours,
        location:
          {
            address1: googlePlacesData?.places[0]?.formattedAddress,
            city: googlePlacesData?.places[0]?.addressComponents?.locality,
            state: googlePlacesData?.places[0]?.addressComponents?.administrativeArea,
            country: googlePlacesData?.places[0]?.addressComponents?.country,
            zip_code: googlePlacesData?.places[0]?.addressComponents?.postalCode
          } || finalOutput.location,
        googleMapsLink:
          googlePlacesData?.places[0]?.googleMapsUri ||
          createGoogleMapsLink(googlePlacesData?.places[0]?.formattedAddress) ||
          finalOutput.googleMapsLink,
        googleReviews: googlePlacesData?.places[0]?.reviews || finalOutput.googleReviews,
        photos: googlePlacesData?.places[0]?.photos || finalOutput.photos
      };
    }

    return finalOutput;
  } catch (error) {
    console.error('Error during business analysis:', error.message);
    return null;
  }
}
