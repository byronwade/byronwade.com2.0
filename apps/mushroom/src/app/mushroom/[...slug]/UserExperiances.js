'use client';
import React, { useEffect, useState } from 'react';
import Generic from '../../../components/boxes/Generic';
import { isInvalidValue } from '../../../utils/invalidValues';

const UserExperience = ({ data }) => {
  const [widths, setWidths] = useState({});

  useEffect(() => {
    const storedWidths = localStorage.getItem('userExperienceWidths');
    if (storedWidths) {
      setWidths(JSON.parse(storedWidths));
    } else {
      const newWidths = getRandomWidths();
      setWidths(newWidths);
      localStorage.setItem('userExperienceWidths', JSON.stringify(newWidths));
    }
  }, []);

  // Early return if data is not provided
  if (!data) {
    return null;
  }

  let validItems = [
    { key: 'suitability', title: 'Suitability', content: data.suitability },
    { key: 'risk_profile', title: 'Risk Profile', content: data.risk_profile },
    { key: 'trip_reports', title: 'Trip Reports', content: data.trip_reports },
    { key: 'safety_precautions', title: 'Safety Precautions', content: data.safety_precautions }
  ].filter((item) => !isInvalidValue(item.content));

  if (validItems.length === 0) {
    return null; // Don't render anything if all items are invalid or "Not applicable"
  }
  // Add common reports to valid items if valid
  if (
    Array.isArray(data.common_reports) &&
    data.common_reports.some((report) => !isInvalidValue(report))
  ) {
    validItems.push({
      key: 'common_reports',
      title: 'Common Reports',
      content: (
        <ul className="pl-5 list-disc">
          {data.common_reports.map((report, index) =>
            !isInvalidValue(report) ? <li key={index}>{report}</li> : null
          )}
        </ul>
      )
    });
  }

  const getRandomWidths = () => {
    const randomWidth = () => Math.floor(Math.random() * (12 - 4 + 1)) + 4;
    return {
      suitability: randomWidth(),
      riskProfile: randomWidth(),
      tripReports: randomWidth(),
      safetyPrecautions: randomWidth(),
      commonReports: randomWidth()
    };
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
            width={{ sm: widths[item.key], md: widths[item.key], lg: widths[item.key] }}
          />
        ))}
      </div>
    ));
  };

  return (
    <div className="my-10">
      <h1 className="my-4 text-5xl font-bold">User Experience</h1>
      <div className="flex flex-col items-stretch w-full gap-4">{renderBoxes()}</div>
    </div>
  );
};

export default UserExperience;
