export async function fetchGooglePlacesData(query) {
  if (!query) {
    throw new Error('Query for Google Places API is empty');
  }

  const costPerCallBasic = 0.032;

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
    console.log('response', response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log('data', data);

    if (!data || Object.keys(data).length === 0) {
      throw new Error('Response from Google Places API is empty or not in expected format');
    }

    const estimatedCost = costPerCallBasic;

    return {
      data,
      estimatedCost
    };
  } catch (error) {
    console.error('Error fetching Google Places Data:', error.message);
    return { error: error.message };
  }
}
