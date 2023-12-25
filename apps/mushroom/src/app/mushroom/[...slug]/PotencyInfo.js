'use client';
import React, { useEffect, useState } from 'react';
import Generic from '../../../components/boxes/Generic';
import { isInvalidValue } from '../../../utils/invalidValues';

const PotencyInfo = ({ data }) => {
  const [widths, setWidths] = useState({});

  useEffect(() => {
    // Load or generate widths
    const storedWidths = localStorage.getItem('potencyInfoWidths');
    if (storedWidths) {
      setWidths(JSON.parse(storedWidths));
    } else {
      const newWidths = getRandomWidths();
      setWidths(newWidths);
      localStorage.setItem('potencyInfoWidths', JSON.stringify(newWidths));
    }
  }, []);

  const getRandomWidths = () => {
    const allKeys = [
      'level',
      'effects',
      'individual_sensitivity',
      'psychoactive_compounds',
      'dosage_recommendations_specific_effects'
    ];
    return allKeys.reduce(
      (acc, key) => ({ ...acc, [key]: Math.floor(Math.random() * (12 - 4 + 1)) + 4 }),
      {}
    );
  };

  // Early return if no valid data
  if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
    console.warn('Potency data is missing or invalid');
    return null;
  }

  // Define validItems array here
  let validItems = [
    { key: 'level', title: 'Potency Level', content: data.level },
    { key: 'effects', title: 'Effects', content: formatEffects(data.effects) },
    {
      key: 'individual_sensitivity',
      title: 'Individual Sensitivity',
      content: data.individual_sensitivity
    },
    {
      key: 'psychoactive_compounds',
      title: 'Psychoactive Compounds',
      content: data.psychoactive_compounds
    },
    {
      key: 'dosage_recommendations_specific_effects',
      title: 'Dosage Recommendations',
      content: formatDosageRecommendations(data.dosage_recommendations_specific_effects)
    }
  ].filter((item) => !isInvalidValue(item.content) && item.content !== 'Not applicable');

  const renderBoxes = () => {
    const chunkedItems = chunkArray(validItems, 3);
    return chunkedItems.map((chunk, chunkIndex) => (
      <div className="flex flex-col items-stretch w-full gap-4 sm:flex-row" key={chunkIndex}>
        {chunk.map((item, index) => (
          <Generic
            key={index}
            title={item.title}
            content={item.content}
            width={{ sm: 12, md: 6, lg: widths[item.key] }}
          />
        ))}
      </div>
    ));
  };

  if (validItems.length > 0) {
    return (
      <div className="my-10">
        <h1 className="my-4 text-5xl font-bold">Potency Information</h1>
        <div className="flex flex-col items-stretch w-full gap-4">{renderBoxes()}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default PotencyInfo;

const formatEffects = (effects) => {
  if (!Array.isArray(effects) || effects.length === 0) {
    return 'Information not available';
  }
  return (
    <ul>
      {effects.map((effect, index) => (
        <li key={index}>{effect}</li>
      ))}
    </ul>
  );
};

const formatDosageRecommendations = (recommendations) => {
  if (typeof recommendations !== 'object' || isInvalidValue(recommendations)) {
    return 'Information not available';
  }
  return (
    <ul>
      {Object.entries(recommendations).map(([key, value]) => (
        <li key={key}>{`${
          key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')
        }: ${value}`}</li>
      ))}
    </ul>
  );
};

const chunkArray = (array, size) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

const getRandomWidths = () => {
  const allKeys = [
    'level',
    'effects',
    'individual_sensitivity',
    'psychoactive_compounds',
    'dosage_recommendations_specific_effects'
  ];
  return allKeys.reduce(
    (acc, key) => ({ ...acc, [key]: Math.floor(Math.random() * (12 - 4 + 1)) + 4 }),
    {}
  );
};
