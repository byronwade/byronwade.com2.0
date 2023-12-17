'use client';
import React, { useState } from 'react';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState('');

  console.log(searchTerm);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/search?query=${searchTerm}`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Data received:', responseData);

      // Check if responseData.data is an array
      if (Array.isArray(responseData.data)) {
        setResults(responseData.data);
      } else {
        console.error('Received data is not an array:', responseData.data);
        setResults([]); // Reset results or handle accordingly
      }
    } catch (error) {
      console.error('There was an error fetching the search results:', error);
    }
  };

  return (
    <>
      <main className="flex-1 overflow-auto">
        <div className="flex py-[26vh] my-12 justify-center items-center">
          <div className="relative flex flex-col items-center w-full px-6">
            <div className="overflow-hidden max-w-[90%] z-10 flex flex-col w-full sm:max-w-md m-auto shadow-lg divide-zinc-600 min-h-12 bg-gray-900 shadow-black/40 rounded-[24px]">
              <div className="relative z-10 flex items-center flex-1 min-w-0 px-3 bg-gray-900 md:pl-4">
                <form className="w-full h-full" onSubmit={handleSearch}>
                  <div
                    className="relative flex items-center w-full min-h-full transition-all duration-300 h-fit"
                    style={{ height: 47 }}
                  >
                    <label htmlFor="home-prompt" className="sr-only">
                      Search
                    </label>
                    <input
                      className="flex-[1_0_50%] min-w-[50%] disabled:opacity-80 text-white text-sm bg-transparent border-0 shadow-none resize-none outline-none ring-0 disabled:bg-transparent selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 [scroll-padding-block:0.75rem] pr-2 leading-relaxed py-3 pl-1 [&_textarea]:px-0"
                      style={{ colorScheme: 'dark', height: '47px !important' }}
                      spellCheck="true"
                      rows={1}
                      placeholder="Search for a shroom..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                      className="shrink-0 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-transparent text-white hover:bg-gray-800 flex items-center justify-center focus-visible:ring-0 focus-visible:bg-gray-800 rounded-full w-[28px] h-[28px]"
                      type="submit"
                      disabled=""
                      id="send-button"
                      data-state="closed"
                    >
                      <span className="sr-only">Send</span>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.5 3V2.25H15V3V10C15 10.5523 14.5522 11 14 11H3.56062L5.53029 12.9697L6.06062 13.5L4.99996 14.5607L4.46963 14.0303L1.39641 10.9571C1.00588 10.5666 1.00588 9.93342 1.39641 9.54289L4.46963 6.46967L4.99996 5.93934L6.06062 7L5.53029 7.53033L3.56062 9.5H13.5V3Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="block w-full mx-auto mt-10">
              {Array.isArray(results) && results.length > 0 ? (
                results.map((item, index) => (
                  <div key={index}>
                    <SearchResult jsonData={item} />
                  </div>
                ))
              ) : (
                <p className="block w-full mx-auto mt-10">No data</p>
              )}
            </div>
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
    <div className="w-full p-4 mx-auto mb-10 prose rounded-md shadow-md lg:prose-xl bg-neutral-200">
      <h1>Common Name</h1>
      <p>{common_name}</p>

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

      <h2>Scientific Profile</h2>
      {scientific_profile && renderNestedObject(scientific_profile)}

      <h2>Classification</h2>
      {classification && renderNestedObject(classification)}

      <h2>Tags</h2>
      <ul>{tags && tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
    </div>
  );
}
