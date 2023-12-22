'use client';
import React, { useState } from 'react';
import Header from '../../components/header';

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
      const apiUrl = `http://localhost:3004/api/mushrooms?term=${encodeURIComponent(
        mushroomName
      )}&url=${encodeURIComponent(url)}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      //console.log('API Response:', responseData.openAIContent.openAIResponse);
      setSubmissionResult(responseData.openAIContent.openAIResponse);

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

  console.log('submissionResult:', submissionResult);
  return (
    <>
      <Header />
      <main className="flex-1 mt-16">
        <div className="flex py-[10vh] my-12 justify-center items-center">
          <div className="relative flex flex-col w-full px-6">
            <form
              onSubmit={handleSubmit}
              className="max-w-[90%] z-10 flex flex-col w-full sm:max-w-md m-auto space-y-6 text-white"
            >
              <h1 className="text-2xl font-black">Submit a Mushroom</h1>
              <div className="relative flex flex-col w-full min-h-full space-y-2 transition-all duration-300 h-fit">
                <input
                  className="flex w-full px-3 py-1 text-sm transition-colors bg-gray-900 rounded-md shadow-lg dark:text-neutral-300 h-9 border-input file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
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
                  className="flex w-full px-3 py-1 text-sm transition-colors bg-gray-900 rounded-md shadow-lg dark:text-neutral-300 h-9 border-input file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
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
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-black transition-colors rounded-md shadow bg-neutral-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-9"
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
                <div className="block w-full mx-auto mt-10">
                  {/* Render SearchResult with submissionResult */}
                  <SearchResult jsonData={submissionResult} />
                </div>
              )}
            </>
          </div>
        </div>
      </main>
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
    common_name,
    origin,
    genetic_lineage,
    year_discovered,
    description,
    poisonous, // This is an object
    edible,
    categories, // This is an array of objects
    pricing, // This is an object
    physical_characteristics, // This is an object
    microscopic_features, // This is an object
    growth_info, // This is an object
    potency_info, // This is an object
    dosage_recommendations, // This is an object
    storage, // This is an object
    legal_status, // This is an object
    additional_info, // This is an object
    educational_summary, // This is an object
    research_data, // This is an object
    tags, // This is an array
    cite_sources, // This is an object
    growth_conditions, // This is an object
    medicinal_properties, // This is an object
    nutritional_value, // This is an object
    user_experience, // This is an object
    scientific_profile, // This is an object
    classification // This is an object
  } = jsonData;

  return (
    <div className="w-full p-4 mx-auto mb-10 prose rounded-md shadow-md lg:prose-sm bg-neutral-200">
      <h1>Common Name</h1>
      <p>{common_name}</p>

      <h2>Scientific Profile</h2>
      {scientific_profile && renderNestedObject(scientific_profile)}

      <h2>Origin</h2>
      <p>{origin}</p>

      <h2>Genetic Lineage</h2>
      <p>{genetic_lineage}</p>

      <h2>Year Discovered</h2>
      <p>{year_discovered}</p>

      <h2>Description</h2>
      <p>{description}</p>

      <h2>Poisonous</h2>
      {poisonous && renderNestedObject(poisonous)}

      <h2>Edible</h2>
      <div>{edible ? 'True' : 'False'}</div>

      <h2>Pricing</h2>
      <div>{pricing && renderNestedObject(pricing)}</div>

      <h2>Categories</h2>
      <ul>
        {categories && categories.map((category, index) => <li key={index}>{category.title}</li>)}
      </ul>

      <h2>Physical Characteristics</h2>
      {physical_characteristics && renderNestedObject(physical_characteristics)}

      <h2>Microscopic Features</h2>
      {microscopic_features && renderNestedObject(microscopic_features)}

      <h2>Growth Info</h2>
      {growth_info && renderNestedObject(growth_info)}

      <h2>Potency Info</h2>
      {potency_info && renderNestedObject(potency_info)}

      <h2>Dosage Recommendations</h2>
      {dosage_recommendations && renderNestedObject(dosage_recommendations)}

      <h2>Storage</h2>
      {storage && renderNestedObject(storage)}

      <h2>Legal Status</h2>
      {legal_status && renderNestedObject(legal_status)}

      <h2>Additional Info</h2>
      {additional_info && renderNestedObject(additional_info)}

      <h2>Educational Summary</h2>
      {educational_summary && renderNestedObject(educational_summary)}

      <h2>Research Data</h2>
      {research_data && renderNestedObject(research_data)}

      <h2>Cite Sources</h2>
      {cite_sources && renderNestedObject(cite_sources)}

      <h2>Growth Conditions</h2>
      {growth_conditions && renderNestedObject(growth_conditions)}

      <h2>Medicinal Properties</h2>
      {medicinal_properties && renderNestedObject(medicinal_properties)}

      <h2>Nutritional Value</h2>
      {nutritional_value && renderNestedObject(nutritional_value)}

      <h2>User Experience</h2>
      {user_experience && renderNestedObject(user_experience)}

      <h2>Classification</h2>
      {classification && renderNestedObject(classification)}

      <h2>Tags</h2>
      <ul>{tags && tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
    </div>
  );
}
