'use client';
import React, { useEffect, useState } from 'react';
import Generic from '../../../components/boxes/Generic';
import { isInvalidValue } from '../../../utils/invalidValues';

const GrowthConditionsInfo = ({ data }) => {
  const [widths, setWidths] = useState({});

  useEffect(() => {
    const storedWidths = localStorage.getItem('growthConditionsWidths');
    if (storedWidths) {
      setWidths(JSON.parse(storedWidths));
    } else {
      const newWidths = getRandomWidths();
      setWidths(newWidths);
      localStorage.setItem('growthConditionsWidths', JSON.stringify(newWidths));
    }
  }, []);

  const getRandomWidths = () => {
    const allKeys = ['soil_type', 'pH_preference', 'altitude_range', 'light_intensity'];
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
    { key: 'soil_type', title: 'Soil Type', content: data.soil_type },
    { key: 'pH_preference', title: 'pH Preference', content: data.pH_preference },
    { key: 'altitude_range', title: 'Altitude Range', content: data.altitude_range },
    { key: 'light_intensity', title: 'Light Intensity', content: data.light_intensity }
  ].filter((item) => !isInvalidValue(item.content));

  // Return null if all items are invalid
  if (validItems.length === 0) {
    return null;
  }

  return (
    <div className="my-10">
      <h1 className="my-4 text-5xl font-bold">Growth Conditions</h1>
      <div className="flex flex-col items-stretch w-full gap-4">{renderBoxes()}</div>
    </div>
  );
};

export default GrowthConditionsInfo;
