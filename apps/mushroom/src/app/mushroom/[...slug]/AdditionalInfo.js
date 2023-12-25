'use client';
import React, { useEffect, useState } from 'react';
import Generic from '../../../components/boxes/Generic';

const AdditionalInfo = ({ data }) => {
  const [widths, setWidths] = useState({});

  useEffect(() => {
    try {
      const storedWidths = localStorage.getItem('additionalInfoWidths');
      if (storedWidths) {
        setWidths(JSON.parse(storedWidths));
      } else {
        const newWidths = getRandomWidths();
        setWidths(newWidths);
        localStorage.setItem('additionalInfoWidths', JSON.stringify(newWidths));
      }
    } catch (error) {
      console.error('Error retrieving or storing widths:', error);
    }
  }, []);

  const getRandomWidths = () => {
    const allKeys = data ? Object.keys(data) : [];
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

  const isValidContent = (content) => {
    return content && content !== 'NULL' && content !== 'Information not available';
  };

  const formatTitle = (key) => {
    return key
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const renderBoxes = () => {
    if (!data) {
      return <p>No additional information available.</p>;
    }

    const validItems = Object.entries(data)
      .filter(([key, value]) => isValidContent(value))
      .map(([key, value]) => ({
        key: key,
        title: formatTitle(key),
        content: value
      }));

    if (validItems.length === 0) {
      return <p>No additional information available.</p>;
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
    console.warn('No data provided to AdditionalInfo component');
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
