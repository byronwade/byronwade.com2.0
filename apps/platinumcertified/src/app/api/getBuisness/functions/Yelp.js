export async function fetchYelpData(parsedContent, business, googlePlacesData) {
  if (!parsedContent || !business) {
    throw new Error('Invalid input for fetching Yelp data');
  }
  if (
    !googlePlacesData ||
    !googlePlacesData.data.places ||
    googlePlacesData.data.places.length === 0
  ) {
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
    googlePlacesData.data.places &&
    googlePlacesData.data.places.length > 0 &&
    googlePlacesData.data.places[0].formattedAddress
  ) {
    formattedAddress = googlePlacesData.data.places[0].formattedAddress;
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

    console.log('yelp response', response);

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
