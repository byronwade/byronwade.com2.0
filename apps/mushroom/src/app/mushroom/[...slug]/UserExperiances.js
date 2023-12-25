'use client';
import React, { useEffect, useState } from 'react';
import Generic from '../../../components/boxes/Generic';
import { isInvalidValue } from '../../../utils/invalidValues';

const UserExperience = ({ data }) => {
  const [widths, setWidths] = useState({});

  // Define getRandomWidths before using it in useEffect
  const getRandomWidths = () => {
    const randomWidth = () => Math.floor(Math.random() * (12 - 4 + 1)) + 4;
    return {
      suitability: randomWidth(),
      risk_profile: randomWidth(),
      trip_reports: randomWidth(),
      safety_precautions: randomWidth(),
      common_reports: randomWidth()
    };
  };

  useEffect(() => {
    try {
      const storedWidths = localStorage.getItem('userExperienceWidths');
      if (storedWidths) {
        const parsedWidths = JSON.parse(storedWidths);
        setWidths(parsedWidths);
      } else {
        const newWidths = getRandomWidths();
        setWidths(newWidths);
        localStorage.setItem('userExperienceWidths', JSON.stringify(newWidths));
      }
    } catch (error) {
      console.error('Error parsing widths from localStorage:', error);
      setWidths(getRandomWidths()); // Fallback to default widths on error
    }
  }, [data]);

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
            width={{ sm: widths[item.key], md: widths[item.key], lg: widths[item.key] }}
          />
        ))}
      </div>
    ));
  };

  if (!data || typeof data !== 'object') {
    console.warn('User experience data is invalid or not provided');
    return null;
  }

  let validItems = [
    { key: 'suitability', title: 'Suitability', content: data.suitability },
    { key: 'risk_profile', title: 'Risk Profile', content: data.risk_profile },
    { key: 'trip_reports', title: 'Trip Reports', content: data.trip_reports },
    { key: 'safety_precautions', title: 'Safety Precautions', content: data.safety_precautions },
    {
      key: 'common_reports',
      title: 'Common Reports',
      content:
        Array.isArray(data.common_reports) &&
        data.common_reports.some((report) => !isInvalidValue(report)) ? (
          <ul className="pl-5 list-disc">
            {data.common_reports.map((report, index) =>
              !isInvalidValue(report) ? <li key={index}>{report}</li> : null
            )}
          </ul>
        ) : (
          'Information not available'
        )
    }
  ].filter((item) => !isInvalidValue(item.content));

  if (validItems.length === 0) {
    console.warn('No valid user experience information available');
    return null;
  }

  return (
    <div className="my-10">
      <h1 className="my-4 text-5xl font-bold">User Experience</h1>
      <div className="flex flex-col items-stretch w-full gap-4">{renderBoxes()}</div>
    </div>
  );
};

export default UserExperience;
