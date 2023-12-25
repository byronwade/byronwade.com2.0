'use client';
import React, { useEffect, useState } from 'react';
import Generic from '../../../components/boxes/Generic';

const DosageRecommendations = ({ data }) => {
  const [widths, setWidths] = useState({});

  useEffect(() => {
    try {
      const storedWidths = localStorage.getItem('dosageRecommendationsWidths');
      if (storedWidths) {
        setWidths(JSON.parse(storedWidths));
      } else {
        const newWidths = generateRandomWidths();
        setWidths(newWidths);
        localStorage.setItem('dosageRecommendationsWidths', JSON.stringify(newWidths));
      }
    } catch (error) {
      console.error('Error retrieving or storing widths:', error);
    }
  }, []);

  const generateRandomWidths = () => {
    const keys = ['very_low', 'low', 'medium', 'high', 'very_high'];
    return keys.reduce(
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
    if (!data) {
      return <p>No additional information available.</p>;
    }
    const validItems = Object.keys(data || {})
      .filter((key) => data[key] !== 'Information not available' && data[key] !== null)
      .map((key) => ({
        key: key,
        title: key.replace(/_/g, ' '),
        content: data[key]
      }));

    if (validItems.length === 0) {
      return <p>No dosage recommendations available.</p>;
    }

    const chunkedItems = chunkArray(validItems, 3);
    return chunkedItems.map((chunk, chunkIndex) => (
      <div className="flex flex-col items-stretch w-full gap-4 sm:flex-row" key={chunkIndex}>
        {chunk.map((item, index) => (
          <Generic
            key={index}
            title={item.title}
            content={item.content}
            width={{ sm: 12, md: 6, lg: widths[item.key] || 6 }} // Fallback width if not found
          />
        ))}
      </div>
    ));
  };

  if (!data || Object.keys(data).length === 0) {
    console.warn('No data provided to DosageRecommendations component');
    return null;
  }

  return (
    <div className="my-10">
      <h1 className="my-4 text-5xl font-bold">Dosage Recommendations</h1>
      <div className="flex flex-col items-stretch w-full gap-4">{renderBoxes()}</div>
    </div>
  );
};

export default DosageRecommendations;
