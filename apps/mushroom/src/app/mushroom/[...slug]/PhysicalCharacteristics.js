'use client';
import React, { useEffect, useState } from 'react';
import Generic from '../../../components/boxes/Generic';
import { isInvalidValue } from '../../../utils/invalidValues';

const PhysicalCharacteristics = ({ data }) => {
  const [widths, setWidths] = useState({});

  useEffect(() => {
    try {
      const storedWidths = localStorage.getItem('physicalCharacteristicsWidths');
      let widthsToUse = {};

      if (storedWidths) {
        widthsToUse = JSON.parse(storedWidths);
      } else {
        widthsToUse = validItems.reduce(
          (acc, item) => ({
            ...acc,
            [item.key]: Math.floor(Math.random() * (12 - 4 + 1)) + 4
          }),
          {}
        );
        localStorage.setItem('physicalCharacteristicsWidths', JSON.stringify(widthsToUse));
      }

      setWidths(widthsToUse);
    } catch (error) {
      console.error('Error loading or parsing widths:', error);
      setWidths(
        validItems.reduce(
          (acc, item) => ({ ...acc, [item.key]: 6 }), // Default width of 6 for all items
          {}
        )
      );
    }
  }, []);

  const formatTitle = (key) => {
    if (key === 'odor_and_taste') {
      return 'Odor & Taste';
    }
    return key
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Function to chunk the array of items into smaller arrays
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
            title={formatTitle(item.key)}
            content={item.content}
            width={{
              sm: 12,
              md: chunk.length === 1 ? 12 : 6,
              lg: widths[item.key] || 4
            }}
          />
        ))}
      </div>
    ));
  };

  if (!data || typeof data !== 'object') {
    console.warn('Physical characteristics data is invalid or not provided');
    return null;
  }

  let validItems = Object.entries(data)
    .flatMap(([key, value]) => {
      if (typeof value === 'object') {
        return Object.entries(value).map(([subKey, subValue]) => ({
          key: `${key}_${subKey}`,
          title: `${formatTitle(key)}: ${formatTitle(subKey)}`,
          content: subValue && !isInvalidValue(subValue) ? subValue : undefined
        }));
      }
      return [
        {
          key,
          title: formatTitle(key),
          content: value && !isInvalidValue(value) ? value : undefined
        }
      ];
    })
    .filter((item) => item && item.content !== undefined);

  if (validItems.length === 0) {
    console.warn('No valid physical characteristics information available');
    return null;
  }

  return (
    <div className="my-10">
      <h1 className="my-4 text-5xl font-bold">Physical Characteristics</h1>
      <div className="flex flex-col items-stretch w-full gap-4">{renderBoxes()}</div>
    </div>
  );
};

export default PhysicalCharacteristics;
