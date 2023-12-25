'use client';
import React, { useEffect, useState } from 'react';
import Generic from '../../../components/boxes/Generic';
import { isInvalidValue } from '../../../utils/invalidValues';

const formatFruitingConditions = (conditions) => {
  if (isInvalidValue(conditions)) {
    return 'Information not available';
  }
  return (
    <ul>
      {Object.entries(conditions).map(([key, value]) => (
        <li key={key}>{`${key.replace(/_/g, ' ')}: ${value}`}</li>
      ))}
    </ul>
  );
};

const GrowthInfo = ({ data }) => {
  const [widths, setWidths] = useState({});

  useEffect(() => {
    try {
      const storedWidths = localStorage.getItem('growthInfoWidths');
      if (storedWidths) {
        const parsedWidths = JSON.parse(storedWidths);
        setWidths(parsedWidths);
      } else {
        const newWidths = getRandomWidths();
        setWidths(newWidths);
        localStorage.setItem('growthInfoWidths', JSON.stringify(newWidths));
      }
    } catch (error) {
      console.error('Error parsing widths from localStorage:', error);
      setWidths(getRandomWidths()); // Fallback to default widths on error
    }
  }, []);

  const getRandomWidths = () => {
    const allKeys = [
      'yield',
      'season',
      'substrate',
      'difficulty',
      'spawn_type',
      'fruiting_time',
      'typical_yield',
      'cultivation_time',
      'incubation_period',
      'fruiting_frequency',
      'common_contaminants',
      'fruiting_conditions',
      'mycelium_appearance'
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
    console.warn('Growth information data is invalid or not provided');
    return null;
  }

  let validItems = [
    { key: 'yield', title: 'Yield', content: data.yield },
    { key: 'season', title: 'Season', content: data.season },
    { key: 'substrate', title: 'Substrate', content: data.substrate },
    { key: 'difficulty', title: 'Difficulty', content: data.difficulty },
    { key: 'spawn_type', title: 'Spawn Type', content: data.spawn_type },
    { key: 'fruiting_time', title: 'Fruiting Time', content: data.fruiting_time },
    { key: 'typical_yield', title: 'Typical Yield', content: data.typical_yield },
    { key: 'cultivation_time', title: 'Cultivation Time', content: data.cultivation_time },
    { key: 'incubation_period', title: 'Incubation Period', content: data.incubation_period },
    { key: 'fruiting_frequency', title: 'Fruiting Frequency', content: data.fruiting_frequency },
    { key: 'common_contaminants', title: 'Common Contaminants', content: data.common_contaminants },
    {
      key: 'fruiting_conditions',
      title: 'Fruiting Conditions',
      content: formatFruitingConditions(data.fruiting_conditions)
    },
    { key: 'mycelium_appearance', title: 'Mycelium Appearance', content: data.mycelium_appearance }
  ].filter((item) => !isInvalidValue(item.content));

  if (validItems.length === 0) {
    console.warn('No valid growth information available');
    return null;
  }

  return (
    <div className="my-10">
      <h1 className="my-4 text-5xl font-bold">Growth Information</h1>
      <div className="flex flex-col items-stretch w-full gap-4">{renderBoxes()}</div>
    </div>
  );
};

export default GrowthInfo;
