'use client';
import React, { useEffect, useState } from 'react';
import Generic from '../../../components/boxes/Generic';
import { isInvalidValue } from '../../../utils/invalidValues';

const AdditionalInfo = ({ data }) => {
  const [widths, setWidths] = useState({});

  useEffect(() => {
    const storedWidths = localStorage.getItem('additionalInfoWidths');
    if (storedWidths) {
      setWidths(JSON.parse(storedWidths));
    } else {
      const newWidths = getRandomWidths();
      setWidths(newWidths);
      localStorage.setItem('additionalInfoWidths', JSON.stringify(newWidths));
    }
  }, []);

  const getRandomWidths = () => {
    const allKeys = Object.keys(data);
    return allKeys.reduce(
      (acc, key) => ({ ...acc, [key]: Math.floor(Math.random() * (12 - 4 + 1)) + 4 }),
      {}
    );
  };

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const renderBoxes = () => {
    const chunkedItems = chunkArray(validItems, 3);
    return chunkedItems.map((chunk, chunkIndex) => (
      <div className="flex flex-col items-stretch w-full gap-4 sm:flex-row" key={chunkIndex}>
        {chunk.map((item, index) => (
          <Generic
            key={index}
            title={item.title}
            content={item.content}
            width={{
              sm: 12,
              md: 6,
              lg: widths[item.key]
            }}
          />
        ))}
      </div>
    ));
  };

  if (!data) {
    return null; // If data is not provided, do not render the component
  }
  let validItems = [
    { key: 'recipes', title: 'Recipes', content: data.recipes },
    { key: 'category', title: 'Category', content: data.category },
    { key: 'availability', title: 'Availability', content: data.availability },
    { key: 'intended_use', title: 'Intended Use', content: data.intended_use },
    { key: 'flavor_profile', title: 'Flavor Profile', content: data.flavor_profile },
    { key: 'medical_effects', title: 'Medical Effects', content: data.medical_effects },
    { key: 'conservation_status', title: 'Conservation Status', content: data.conservation_status },
    { key: 'preparation_methods', title: 'Preparation Methods', content: data.preparation_methods },
    {
      key: 'cultural_significance',
      title: 'Cultural Significance',
      content: data.cultural_significance
    },
    {
      key: 'historical_significance',
      title: 'Historical Significance',
      content: data.historical_significance
    }
  ].filter((item) => !isInvalidValue(item.content));

  // Return null if all items are invalid
  if (validItems.length === 0) {
    return null;
  }

  return (
    <div className="my-10">
      <h1 className="my-4 text-5xl font-bold">Additional Information</h1>
      <div className="flex flex-col items-stretch w-full gap-4">{renderBoxes()}</div>
    </div>
  );
};

export default AdditionalInfo;
