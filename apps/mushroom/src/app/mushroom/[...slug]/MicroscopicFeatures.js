'use client';
import React, { useEffect, useState } from 'react';
import Generic from '../../../components/boxes/Generic';
import { isInvalidValue } from '../../../utils/invalidValues';

const MicroscopicFeatures = ({ data }) => {
  const [widths, setWidths] = useState({});

  useEffect(() => {
    const storedWidths = localStorage.getItem('microscopicFeaturesWidths');
    if (storedWidths) {
      setWidths(JSON.parse(storedWidths));
    } else {
      const newWidths = validItems.reduce(
        (acc, item) => ({
          ...acc,
          [item.key]: Math.floor(Math.random() * (12 - 4 + 1)) + 4
        }),
        {}
      );
      setWidths(newWidths);
      localStorage.setItem('microscopicFeaturesWidths', JSON.stringify(newWidths));
    }
  }, []);

  if (!data) {
    return null; // If data is not provided, do not render the component
  }

  let validItems = [
    { key: 'spores', title: 'Spores', content: data.spores },
    { key: 'basidia', title: 'Basidia', content: data.basidia },
    { key: 'pileipellis', title: 'Pileipellis', content: data.pileipellis },
    { key: 'cheilocystidia', title: 'Cheilocystidia', content: data.cheilocystidia },
    { key: 'clamp_connections', title: 'Clamp Connections', content: data.clamp_connections }
  ].filter((item) => !isInvalidValue(item.content));

  if (validItems.length === 0) {
    return null; // Do not render if all items are invalid
  }

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
              lg: widths[item.key] || 4
            }}
          />
        ))}
      </div>
    ));
  };

  return (
    <div className="my-10">
      <h1 className="my-4 text-5xl font-bold">Microscopic Features</h1>
      <div className="flex flex-col items-stretch w-full gap-4">{renderBoxes()}</div>
    </div>
  );
};

export default MicroscopicFeatures;
