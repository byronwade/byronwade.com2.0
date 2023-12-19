import { fetchOpenAIContent } from './functions/OpenAI';
import { fetchYelpData } from './functions/Yelp';
import { fetchGooglePlacesData } from './functions/GooglePlaces';
import { getBaiscCompanyData } from './functions/BasicCompanyData';
import { blobToDataURI, createGoogleMapsLink } from '../seo/utils/utils';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return Response.json({ error: 'URL parameter is required' });
  }

  try {
    const business = await getBaiscCompanyData(url);
    if (!business) {
      console.error('Failed to get basic company data');
      return Response.json({ error: 'Failed to get basic company data' });
    }

    const { openAIContent, openAIEstimatedCost } = await fetchOpenAIContent(business);
    if (!openAIContent) {
      console.error('Failed to get OpenAI content');
      return Response.json({ error: 'Failed to get OpenAI content' });
    }

    let googlePlacesData = null;
    if (openAIContent.googleQuery) {
      googlePlacesData = await fetchGooglePlacesData(openAIContent.googleQuery);
      if (!googlePlacesData || !googlePlacesData.data) {
        console.error('Failed to get Google Places data');
        return Response.json({ error: 'Failed to get Google Places data' });
      }
    }

    let yelp = null;
    if (openAIContent) {
      yelp = await fetchYelpData(openAIContent, business, googlePlacesData);
      if (!yelp) {
        console.error('Failed to get Yelp data');
        return Response.json({ error: 'Failed to get Yelp data' });
      }
    }

    let finalOutput = {
      // Default values
      id: null, //come up with an id-ing system
      slug: openAIContent?.name || null, //create a function to make this lowercase and add dashes as a slug
      name: openAIContent?.name || null,
      description: openAIContent?.description || null,
      website: url || null,
      phone: openAIContent?.phone || null,
      email: openAIContent?.email || null,
      categories: openAIContent?.categories || null,
      industry: null,
      founded: null,
      businessStatus: null,
      googleQuery: openAIContent?.googleQuery || null,
      ai: {
        sentimentScore: openAIContent?.sentimentScore || null,
        brandConsistencyScore: openAIContent?.brandConsistencyScore || null
      },
      ratings: {
        yelpRatingCount: null,
        yelpRating: null,
        googleRating: null,
        googleRatingCount: null,
        googleReviews: null,
        yelpReviews: null
      },
      hours: {
        regularOpeningHours: null,
        currentOpeningHours: null
      },
      locations: {
        googleMapsLink: null,
        headquartersAddress: null,
        address: openAIContent?.address || null,
        coordinates: null,
        location: null
      },
      images: {
        screenshot: blobToDataURI(business?.websiteData) || null,
        photos: null,
        logo: null,
        image_url: null
      },
      apiData: {
        yelpData: yelp?.yelpData || null,
        googlePlacesData: googlePlacesData?.data?.places[0] || null,
        googleSearchData: null, //need to add this to the api calls
        BBBData: null //need to add this to the api calls
        //need to add more to expand on the data
        //adding a api to collect photos on a company
      },
      estimatedTotalCost: openAIEstimatedCost + googlePlacesData?.data?.estimatedCost
    };

    console.log('finalOutput', finalOutput);

    if (yelp && yelp.yelpData) {
      finalOutput = {
        ...finalOutput,
        name: yelp.yelpData.name || finalOutput.name,
        phone: yelp.yelpData.display_phone || finalOutput.phone,
        images: {
          image_url: yelp.yelpData.image_url || finalOutput.image_url,
          photos: yelp.yelpData.photos || finalOutput.photos
        },
        ratings: {
          yelpRatingCount: yelp.yelpData.review_count || finalOutput.yelpRatingCount,
          yelpRating: yelp.yelpData.rating || finalOutput.yelpRating,
          yelpReviews: yelp.yelpReviews || finalOutput.yelpReviews
        },
        categories: finalOutput.categories || yelp.yelpData.categories
      };
    }

    if (
      googlePlacesData &&
      googlePlacesData?.data?.places[0] &&
      googlePlacesData?.data?.places[0].length > 0
    ) {
      const place = googlePlacesData?.data?.places[0];
      finalOutput = {
        ...finalOutput,
        name: place?.displayName?.text || finalOutput.name,
        phone: place?.nationalPhoneNumber || finalOutput.phone,
        locations: {
          address: place?.formattedAddress || finalOutput.address,
          coordinates: place?.location || finalOutput.coordinates,
          location:
            {
              address1: place?.formattedAddress,
              city: place?.addressComponents?.locality,
              state: place?.addressComponents?.administrativeArea,
              country: place?.addressComponents?.country,
              zip_code: place?.addressComponents?.postalCode
            } || null
        },
        ratings: {
          googleRating: place?.rating || finalOutput.googleRating,
          googleRatingCount: place?.userRatingCount || finalOutput.googleRatingCount,
          googleReviews: place?.reviews || finalOutput.googleReviews
        },
        businessStatus: place?.businessStatus || finalOutput.businessStatus,
        hours: {
          regularOpeningHours: place?.regularOpeningHours || finalOutput.regularOpeningHours,
          currentOpeningHours: place?.currentOpeningHours || finalOutput.currentOpeningHours
        },
        googleMapsLink:
          place?.googleMapsUri ||
          createGoogleMapsLink(place?.formattedAddress) ||
          finalOutput.googleMapsLink,
        images: {
          photos: place?.photos || finalOutput.photos
        }
      };
    }

    return Response.json({ finalOutput });
  } catch (error) {
    console.error('API Error:', error.message);
    return Response.json({ error: 'Internal Server Error' });
  }
}
