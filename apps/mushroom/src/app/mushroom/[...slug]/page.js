async function fetchMushroomResults(slug) {
  const response = await fetch(`http://localhost:3004/api/search?slug=${slug}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
}

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const responseData = await fetchMushroomResults(slug);
  const mushroomData = responseData.data;

  // Constructing metadata using mushroomData
  const title = `Explore ${mushroomData.common_name} at Shroomageddon - Your Ultimate Mushroom Database`;
  const description = `${mushroomData.common_name}: ${mushroomData.description}`;
  const keywords = mushroomData.tags.join(', ');
  //const imageUrl = mushroomData.visual_identifiers.images[0] || 'default-image-url.jpg'; // Replace with your default image URL

  // Metadata object
  return {
    title: title,
    description: description,
    generator: 'Next.js',
    applicationName: 'Shroomageddon - Mushroom Database',
    keywords: keywords,
    authors: [
      {
        name: 'Byron Wade',
        url: 'https://www.shroomageddon.com/'
      }
    ],
    creator: 'Byron Wade',
    publisher: 'Byron Wade',
    alternates: {},
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    category: 'Mycology',
    bookmarks: [`https://www.shroomageddon.com/${mushroomData.slug}`],
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      creator: '@Shroomageddon', // Replace with actual Twitter handle
      images: {
        //url: imageUrl,
        alt: mushroomData.common_name
      }
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://www.shroomageddon.com/${mushroomData.slug}`,
      siteName: 'Shroomageddon - Mushroom Database',
      images: [
        {
          //url: imageUrl,
          width: 800, // Adjust as per your image dimensions
          height: 600, // Adjust as per your image dimensions
          alt: mushroomData.common_name
        }
        // ...additional images if available
      ],
      locale: 'en-US',
      type: 'website'
    }
  };
}

export default async function BlogPage({ params }) {
  const slug = params.slug.toString();
  console.log(slug);
  const responseData = await fetchMushroomResults(slug);
  console.log('API Response:', responseData.data);

  return (
    <section className="text-black">
      <pre>{JSON.stringify(responseData.data, null, 2)}</pre>
    </section>
  );
}
