'use client';
import React, { useEffect, useState } from 'react';
import Generic from '../../../components/boxes/Generic';
import { isInvalidValue } from '../../../utils/invalidValues';

const PhysicalCharacteristics = ({ data }) => {
  const [widths, setWidths] = useState({});

  useEffect(() => {
    const storedWidths = localStorage.getItem('physicalCharacteristicsWidths');
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
      localStorage.setItem('physicalCharacteristicsWidths', JSON.stringify(newWidths));
    }
  }, []);

  if (!data) {
    return null; // If data is not provided, do not render the component
  }

  let validItems = Object.entries(data)
    .flatMap(([key, value]) => {
      if (typeof value === 'object') {
        return Object.entries(value).map(([subKey, subValue]) => ({
          key: `${key}_${subKey}`,
          title: `${key.charAt(0).toUpperCase() + key.slice(1)} - ${
            subKey.charAt(0).toUpperCase() + subKey.slice(1)
          }`,
          content: subValue
        }));
      }
      return [{ key, title: key.charAt(0).toUpperCase() + key.slice(1), content: value }];
    })
    .filter((item) => !isInvalidValue(item.content));

  if (validItems.length === 0) {
    return null;
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
      <h1 className="my-4 text-5xl font-bold">Physical Characteristics</h1>
      <div className="flex flex-col items-stretch w-full gap-4">{renderBoxes()}</div>
    </div>
  );
};

export default PhysicalCharacteristics;
