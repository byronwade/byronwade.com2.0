'use client';
import React, { useEffect, useState } from 'react';
import Generic from '../../../components/boxes/Generic';
import { isInvalidValue } from '../../../utils/invalidValues';

const ResearchDataInfo = ({ data }) => {
  const [widths, setWidths] = useState({});

  useEffect(() => {
    try {
      const storedWidths = localStorage.getItem('researchDataWidths');
      if (storedWidths) {
        const parsedWidths = JSON.parse(storedWidths);
        setWidths(parsedWidths);
      } else {
        const newWidths = getRandomWidths();
        setWidths(newWidths);
        localStorage.setItem('researchDataWidths', JSON.stringify(newWidths));
      }
    } catch (error) {
      console.error('Error parsing widths from localStorage:', error);
      setWidths(getRandomWidths()); // Fallback to default widths on error
    }
  }, []);

  const getRandomWidths = () => {
    if (!data || typeof data !== 'object') {
      return {};
    }
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
              lg: widths[item.key] || 6 // Fallback width
            }}
          />
        ))}
      </div>
    ));
  };

  if (!data || typeof data !== 'object') {
    console.warn('Research data is invalid or not provided');
    return null;
  }

  let validItems = [
    { key: 'genetic_information', title: 'Genetic Information', content: data.genetic_information },
    {
      key: 'morphological_details',
      title: 'Morphological Details',
      content: data.morphological_details
    },
    {
      key: 'psychoactive_properties',
      title: 'Psychoactive Properties',
      content: data.psychoactive_properties
    },
    {
      key: 'habitat_and_distribution',
      title: 'Habitat and Distribution',
      content: data.habitat_and_distribution
    }
  ].filter((item) => !isInvalidValue(item.content));

  if (validItems.length === 0) {
    console.warn('No valid research data information available');
    return null;
  }

  return (
    <div className="my-10">
      <h1 className="my-4 text-5xl font-bold">Research Data</h1>
      <div className="flex flex-col items-stretch w-full gap-4">{renderBoxes()}</div>
    </div>
  );
};

export default ResearchDataInfo;
