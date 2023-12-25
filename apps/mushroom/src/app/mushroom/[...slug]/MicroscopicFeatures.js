'use client';
import React, { useEffect, useState } from 'react';
import Generic from '../../../components/boxes/Generic';
import { isInvalidValue } from '../../../utils/invalidValues';

const MicroscopicFeatures = ({ data }) => {
  const [widths, setWidths] = useState({});

  useEffect(() => {
    try {
      const storedWidths = localStorage.getItem('microscopicFeaturesWidths');
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
        localStorage.setItem('microscopicFeaturesWidths', JSON.stringify(widthsToUse));
      }

      setWidths(widthsToUse);
    } catch (error) {
      console.error('Error loading or parsing widths:', error);
      // Fallback to default widths if error occurs
      setWidths(
        validItems.reduce(
          (acc, item) => ({ ...acc, [item.key]: 6 }), // Default width of 6 for all items
          {}
        )
      );
    }
  }, []);

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
              md: chunk.length === 1 ? 12 : 6,
              lg: widths[item.key] || 4 // Fallback width if not set
            }}
          />
        ))}
      </div>
    ));
  };

  if (!data || typeof data !== 'object') {
    console.warn('Microscopic features data is invalid or not provided');
    return null;
  }

  let validItems = [
    { key: 'spores', title: 'Spores', content: data.spores },
    { key: 'basidia', title: 'Basidia', content: data.basidia },
    { key: 'pileipellis', title: 'Pileipellis', content: data.pileipellis },
    { key: 'cheilocystidia', title: 'Cheilocystidia', content: data.cheilocystidia },
    { key: 'clamp_connections', title: 'Clamp Connections', content: data.clamp_connections }
  ].filter((item) => !isInvalidValue(item.content));

  if (validItems.length === 0) {
    console.warn('No valid microscopic features information available');
    return null;
  }

  return (
    <div className="my-10">
      <h1 className="my-4 text-5xl font-bold">Microscopic Features</h1>
      <div className="flex flex-col items-stretch w-full gap-4">{renderBoxes()}</div>
    </div>
  );
};

export default MicroscopicFeatures;
