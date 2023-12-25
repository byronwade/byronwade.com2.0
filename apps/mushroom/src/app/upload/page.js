'use client';
import React, { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

import { Loader } from 'react-feather'; // Import Loader icon from react-feather

export default function Search() {
  const [mushroomName, setMushroomName] = useState('');
  const [url, setUrl] = useState('');
  const [submissionResult, setSubmissionResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/mushrooms?term=${encodeURIComponent(
        mushroomName
      )}&url=${encodeURIComponent(url)}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('API Response:', responseData);
      setSubmissionResult(responseData);

      // Reset form fields
      setMushroomName('');
      setUrl('');
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      setSubmissionResult(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  //console.log('submissionResult:', submissionResult);
  return (
    <>
      <Header />
      <main className="flex-1 mt-16">
        <div className="flex py-[10vh] my-12 justify-center items-center">
          <div className="relative flex flex-col w-full px-6">
            <form
              onSubmit={handleSubmit}
              className="max-w-[90%] z-10 flex flex-col w-full sm:max-w-md m-auto space-y-6 text-black dark:text-gray-300"
            >
              <h1 className="text-2xl font-black">Submit a Mushroom</h1>
              <div className="relative flex flex-col w-full min-h-full space-y-2 transition-all duration-300 h-fit">
                <input
                  className="flex w-full px-3 py-1 text-sm transition-colors bg-gray-900 rounded-md shadow-lg dark:text-gray-300 h-9 border-input file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter mushroom name"
                  id="mushroomName"
                  aria-describedby="mushroomName-description"
                  aria-invalid="false"
                  value={mushroomName}
                  onChange={(e) => setMushroomName(e.target.value)}
                  name="mushroomName"
                />
                <p id="mushroomName-description" className="text-[0.8rem]">
                  Enter the scientific or common name of the mushroom. For accuracy.
                </p>
              </div>

              <div className="relative flex flex-col w-full min-h-full space-y-2 transition-all duration-300 h-fit">
                <input
                  className="flex w-full px-3 py-1 text-sm transition-colors bg-gray-900 rounded-md shadow-lg dark:text-gray-300 h-9 border-input file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter URL"
                  id="mushroomUrl"
                  aria-describedby="mushroomUrl-description"
                  aria-invalid="false"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  name="mushroomUrl"
                />
                <p id="mushroomUrl-description" className="text-[0.8rem]">
                  Provide the URL for detailed information about the mushroom.
                </p>
              </div>

              <button
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-black transition-colors bg-gray-300 rounded-md shadow whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-9"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader className="mr-2 animate-spin" />{' '}
                    {/* Add Loader icon with spinning animation */}
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </form>

            <>
              {/* ... [rest of your existing JSX code] */}
              {submissionResult && (
                <div className="text-white">
                  {submissionResult.existingMushroomResponse && (
                    <div>
                      <h1>Existing Data Found</h1>
                      <pre>{submissionResult.existingMushroomResponse.common_name}</pre>
                    </div>
                  )}

                  {submissionResult.existingMushroomResponse && (
                    <div>
                      <h1>Wiki Data</h1>
                      <pre className="whitespace-pre-wrap ">{submissionResult.wikiData}</pre>
                    </div>
                  )}

                  {submissionResult.openAIContent && (
                    <div className="block w-full mx-auto mt-10">
                      <SearchResult jsonData={submissionResult.openAIContent.openAIResponse} />
                    </div>
                  )}
                </div>
              )}
            </>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function renderNestedObject(obj) {
  if (!obj) {
    return <span>Information not available</span>;
  }

  return (
    <ul>
      {Object.entries(obj).map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong>{' '}
          {typeof value === 'object' && value !== null
            ? renderNestedObject(value)
            : value !== null
            ? value.toString()
            : 'N/A'}
        </li>
      ))}
    </ul>
  );
}

function SearchResult({ jsonData }) {
  const {
    identification: {
      common_name,
      scientific_profile,
      classification,
      detailed_description,
      visual_identifiers,
      genetic_identifiers
    },
    habitat_and_ecology: { habitat, ecology, physical_characteristics },
    general_info: {
      origin,
      year_discovered,
      description,
      categories,
      tags,
      legal_status,
      educational_summary
    },
    toxicity,
    growth_info,
    psychoactive_info,
    storage,
    additional_info,
    cite_sources,
    research_data,
    growth_conditions,
    nutritional_value,
    medicinal_properties,
    pricing,
    culinary_uses,
    mycological_research
  } = jsonData;

  // Helper function to render nested objects (Assuming it's already defined)
  // const renderNestedObject = (obj) => {/* Logic to render nested object */};

  return (
    <div className="w-full p-4 mx-auto mb-10 prose bg-gray-200 rounded-md shadow-md lg:prose-sm">
      {/* Render identification details */}
      <h1>Identification</h1>
      <h2>Common Name</h2>
      <p>{common_name}</p>

      <h2>Scientific Profile</h2>
      {scientific_profile && renderNestedObject(scientific_profile)}

      <h2>Classification</h2>
      {classification && renderNestedObject(classification)}

      <h2>Detailed Description</h2>
      <p>{detailed_description}</p>

      <h2>Visual Identifiers</h2>
      {visual_identifiers && renderNestedObject(visual_identifiers)}

      <h2>Genetic Identifiers</h2>
      {genetic_identifiers && renderNestedObject(genetic_identifiers)}

      {/* Render habitat and ecology details */}
      <h2>Habitat</h2>
      <p>{habitat}</p>

      <h2>Ecology</h2>
      <p>{ecology}</p>

      <h2>Physical Characteristics</h2>
      {physical_characteristics && renderNestedObject(physical_characteristics)}

      {/* Render general info */}
      <h2>General Info</h2>
      <h3>Origin</h3>
      <p>{origin}</p>

      <h3>Year Discovered</h3>
      <p>{year_discovered}</p>

      <h3>Description</h3>
      <p>{description}</p>

      <h3>Categories</h3>
      <ul>
        {categories && categories.map((category, index) => <li key={index}>{category.alias}</li>)}
      </ul>

      <h3>Tags</h3>
      <ul>{tags && tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>

      <h3>Legal Status</h3>
      {legal_status && renderNestedObject(legal_status)}

      <h3>Educational Summary</h3>
      {educational_summary && renderNestedObject(educational_summary)}

      {/* Render other sections */}
      <h2>Toxicity</h2>
      {toxicity && renderNestedObject(toxicity)}

      <h2>Growth Info</h2>
      {growth_info && renderNestedObject(growth_info)}

      <h2>Psychoactive Info</h2>
      {psychoactive_info && renderNestedObject(psychoactive_info)}

      <h2>Storage</h2>
      {storage && renderNestedObject(storage)}

      <h2>Additional Info</h2>
      {additional_info && renderNestedObject(additional_info)}

      <h2>Cite Sources</h2>
      {cite_sources && renderNestedObject(cite_sources)}

      <h2>Research Data</h2>
      {research_data && renderNestedObject(research_data)}

      <h2>Growth Conditions</h2>
      {growth_conditions && renderNestedObject(growth_conditions)}

      <h2>Nutritional Value</h2>
      {nutritional_value && renderNestedObject(nutritional_value)}

      <h2>Medicinal Properties</h2>
      {medicinal_properties && renderNestedObject(medicinal_properties)}

      <h2>Pricing</h2>
      {pricing && renderNestedObject(pricing)}

      <h2>Culinary Uses</h2>
      {culinary_uses && renderNestedObject(culinary_uses)}

      <h2>Mycological Research</h2>
      {mycological_research && renderNestedObject(mycological_research)}
    </div>
  );
}
