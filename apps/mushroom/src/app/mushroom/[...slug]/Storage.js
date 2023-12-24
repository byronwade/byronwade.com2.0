'use client';
import React, { useEffect, useState } from 'react';
import Generic from '../../../components/boxes/Generic';
import { isInvalidValue } from '../../../utils/invalidValues';

const StorageInfo = ({ data }) => {
  const [widths, setWidths] = useState({});

  useEffect(() => {
    const storedWidths = localStorage.getItem('storageInfoWidths');
    if (storedWidths) {
      setWidths(JSON.parse(storedWidths));
    } else {
      const newWidths = getRandomWidths();
      setWidths(newWidths);
      localStorage.setItem('storageInfoWidths', JSON.stringify(newWidths));
    }
  }, []);

  // Format the storage content for display
  const formatStorageContent = (storage) => {
    if (isInvalidValue(storage)) {
      return 'Information not available';
    }
    return Object.entries(storage)
      .map(([key, value]) => `${key.replace(/_/g, ' ')}: ${value}`)
      .join(', ');
  };

  const getRandomWidths = () => {
    const allKeys = [
      'spore_storage',
      'harvested_mushroom_storage_dried',
      'harvested_mushroom_storage_fresh'
    ];
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

  if (!data || !data.harvested_mushroom_storage) {
    return null; // Check if data or harvested_mushroom_storage is not available
  }

  let validItems = [
    {
      key: 'spore_storage',
      title: 'Spore Storage',
      content: data.spore_storage
        ? `Shelf Life: ${data.spore_storage.shelf_life}, Environment: ${data.spore_storage.environment}, Temperature: ${data.spore_storage.temperature}`
        : 'Information not available'
    },
    {
      key: 'harvested_mushroom_storage_dried',
      title: 'Harvested Mushroom Storage (Dried)',
      content: data.harvested_mushroom_storage.dried
        ? formatStorageContent(data.harvested_mushroom_storage.dried)
        : 'Information not available'
    },
    {
      key: 'harvested_mushroom_storage_fresh',
      title: 'Harvested Mushroom Storage (Fresh)',
      content: data.harvested_mushroom_storage.fresh
        ? formatStorageContent(data.harvested_mushroom_storage.fresh)
        : 'Information not available'
    }
  ].filter((item) => !isInvalidValue(item.content));

  return (
    <div className="my-10">
      <h1 className="my-4 text-5xl font-bold">Storage Information</h1>
      <div className="flex flex-col items-stretch w-full gap-4">{renderBoxes()}</div>
    </div>
  );
};

export default StorageInfo;
