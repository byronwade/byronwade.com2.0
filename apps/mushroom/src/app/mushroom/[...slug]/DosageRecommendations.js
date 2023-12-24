'use client';
import React, { useEffect, useState } from 'react';
import Generic from '../../../components/boxes/Generic';
import { isInvalidValue } from '../../../utils/invalidValues';

const DosageRecommendations = ({ data }) => {
  const [widths, setWidths] = useState({});

  useEffect(() => {
    const storedWidths = localStorage.getItem('dosageRecommendationsWidths');
    if (storedWidths) {
      setWidths(JSON.parse(storedWidths));
    } else {
      const newWidths = getRandomWidths();
      setWidths(newWidths);
      localStorage.setItem('dosageRecommendationsWidths', JSON.stringify(newWidths));
    }
  }, []);

  if (!data) {
    return null; // If data is not provided, do not render the component
  }
  const validItems = [
    { key: 'very_low', title: 'Very Low', content: data.very_low },
    { key: 'low', title: 'Low', content: data.low },
    { key: 'medium', title: 'Medium', content: data.medium },
    { key: 'high', title: 'High', content: data.high },
    { key: 'very_high', title: 'Very High', content: data.very_high }
  ].filter((item) => !isInvalidValue(item.content));

  if (validItems.length === 0) {
    return null; // Don't render anything if all items are invalid or "Not applicable"
  }

  const getRandomWidths = () => {
    const allKeys = ['very_low', 'low', 'medium', 'high', 'very_high'];
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
    if (validItems.length === 0) {
      return null;
    }

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

  return (
    <div className="my-10">
      <h1 className="my-4 text-5xl font-bold">Dosage Recommendations</h1>
      <div className="flex flex-col items-stretch w-full gap-4">{renderBoxes()}</div>
    </div>
  );
};

export default DosageRecommendations;
