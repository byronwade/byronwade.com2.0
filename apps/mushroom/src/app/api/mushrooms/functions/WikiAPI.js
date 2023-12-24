export async function searchWikipedia(term) {
  const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
    term
  )}&format=json`;

  try {
    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();

    if (searchData.query.search.length > 0) {
      return searchData.query.search[0].pageid;
    } else {
      console.log('No results found for:', term);
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export async function fetchFullWikipediaPage(pageId) {
  const fullContentUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&pageids=${pageId}&format=json`;

  try {
    const response = await fetch(fullContentUrl);
    const data = await response.json();

    if (
      data.query &&
      data.query.pages &&
      data.query.pages[pageId] &&
      data.query.pages[pageId].revisions
    ) {
      return data.query.pages[pageId].revisions[0]['*'];
    } else {
      console.log('No page data found for Page ID:', pageId);
      return null;
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

function extractRelevantContent(fullContent) {
  let extractedContent = '';

  // Capture the title and introduction
  const titleIntroRegex = /^(.*?)==/s; // Captures content from the start until the first '=='
  const titleIntroMatch = fullContent.match(titleIntroRegex);
  if (titleIntroMatch) {
    extractedContent += titleIntroMatch[0] + '\n\n';
  }

  // Capture relevant sections
  const relevantSections = [
    'Description',
    'Habitat',
    'Taxonomy',
    'Uses',
    'Speciesbox',
    'Mycomorphbox',
    'Folk medicine',
    'Clinical research and phytochemistry',
    'English',
    'Varieties'
  ];

  relevantSections.forEach((section) => {
    const sectionRegex = new RegExp(`==\\s*${section}\\s*==([\\s\\S]*?)(?=\\n==)`);
    const match = fullContent.match(sectionRegex);
    if (match) {
      extractedContent += match[0] + '\n\n';
    }
  });

  // Extract Wikipedia categories
  const categoryRegex = /\[\[Category:[^\]]+\]\]\n/g;
  const categories = fullContent.match(categoryRegex);
  if (categories) {
    extractedContent += '\n' + categories.join('\n');
  }

  return extractedContent;
}

function truncateContent(content, maxCharacters) {
  return content.length > maxCharacters ? content.substring(0, maxCharacters) + '...' : content;
}

// Modified function to get and process Wikipedia data
export async function getWikipediaData(term) {
  const pageId = await searchWikipedia(term);
  if (pageId) {
    const fullContent = await fetchFullWikipediaPage(pageId);
    if (fullContent) {
      const relevantContent = extractRelevantContent(fullContent);
      console.log('relevantContent', relevantContent);
      const truncatedContent = truncateContent(relevantContent, 10000); // Adjust character limit as needed
      return truncatedContent; // This will be the processed Wikipedia page content
    } else {
      console.log('No content found for Page ID:', pageId);
      return null;
    }
  } else {
    console.log('Page ID not found for the given term.');
    return null;
  }
}
