'use client';
'use client';
import React, { useEffect, useState } from 'react';
import Generic from '../../../components/boxes/Generic';

const CiteSourcesInfo = ({ data }) => {
  const [widths, setWidths] = useState({});
  const [validItems, setValidItems] = useState([]);

  useEffect(() => {
    try {
      const storedWidths = localStorage.getItem('citeSourcesWidths');
      if (storedWidths) {
        setWidths(JSON.parse(storedWidths));
      } else {
        const newWidths = getRandomWidths();
        setWidths(newWidths);
        localStorage.setItem('citeSourcesWidths', JSON.stringify(newWidths));
      }
    } catch (error) {
      console.error('Error retrieving or storing widths:', error);
    }
  }, []);

  useEffect(() => {
    const filteredItems = Object.entries(data || {})
      .filter(([key, source]) => isValidContent(source))
      .map(([key, source]) => ({
        key: key,
        title: source.title !== 'NULL' ? source.title : `Source ${key.replace('_', ' ')}`,
        content: (
          <div>
            <p>{source.data_gathered}</p>
            {source.url && source.url !== 'NULL' && (
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                Source Link
              </a>
            )}
          </div>
        )
      }));

    setValidItems(filteredItems);
  }, [data]);

  const getRandomWidths = () => {
    const allKeys = data ? Object.keys(data) : [];
    return allKeys.reduce(
      (acc, key) => ({ ...acc, [key]: Math.floor(Math.random() * (12 - 4 + 1)) + 4 }),
      {}
    );
  };

  const isValidContent = (source) => {
    return (
      source && source.url && source.url !== 'NULL' && source.url !== 'Information not available'
    );
  };

  // If there are no valid items, do not render the component at all
  if (validItems.length === 0) {
    return null;
  }

  const renderBoxes = () => {
    return validItems.map((item, index) => (
      <Generic
        key={index}
        title={item.title}
        content={item.content}
        width={{ sm: 12, md: 6, lg: widths[item.key] || 6 }}
      />
    ));
  };

  return (
    <div className="my-10">
      <h1 className="my-4 text-5xl font-bold">Cited Sources</h1>
      <div className="flex flex-col items-stretch w-full gap-4">{renderBoxes()}</div>
    </div>
  );
};

export default CiteSourcesInfo;
