'use client';
import React, { useEffect, useState } from 'react';
import Generic from '../../../components/boxes/Generic';
import { isInvalidValue } from '../../../utils/invalidValues';

const CiteSourcesInfo = ({ data }) => {
  const [widths, setWidths] = useState({});

  useEffect(() => {
    const storedWidths = localStorage.getItem('citeSourcesWidths');
    if (storedWidths) {
      setWidths(JSON.parse(storedWidths));
    } else {
      const newWidths = getRandomWidths();
      setWidths(newWidths);
      localStorage.setItem('citeSourcesWidths', JSON.stringify(newWidths));
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
  let validItems = Object.keys(data)
    .map((key) => {
      const source = data[key];
      return {
        key: key,
        title:
          source.title !== 'Information not available'
            ? source.title
            : key.replace('_', ' ').toUpperCase(),
        content: (
          <div>
            <p>{source.data_gathered}</p>
            {source.url !== 'Information not available' && (
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                Source Link
              </a>
            )}
          </div>
        )
      };
    })
    .filter((item) => !isInvalidValue(item.content.url) || !isInvalidValue(item.content.title));

  // Return null if all items are invalid
  if (validItems.length === 0) {
    return null;
  }

  return (
    <div className="my-10">
      <h1 className="my-4 text-5xl font-bold">Cited Sources</h1>
      <div className="flex flex-col items-stretch w-full gap-4">{renderBoxes()}</div>
    </div>
  );
};

export default CiteSourcesInfo;
