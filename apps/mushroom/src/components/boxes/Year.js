'use client';
import React, { useEffect, useState, useRef } from 'react';
import { isInvalidValue } from '../../utils/invalidValues';

export default function Year({ data, width }) {
  const [fontSize, setFontSize] = useState(36); // Starting with a reasonable default font size
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const isValidData = !isInvalidValue(data);

  useEffect(() => {
    const adjustFontSize = () => {
      if (textRef.current && containerRef.current) {
        let currentFontSize = fontSize;
        while (
          textRef.current.offsetWidth > containerRef.current.offsetWidth &&
          currentFontSize > 12
        ) {
          currentFontSize--;
        }
        if (currentFontSize !== fontSize) {
          setFontSize(currentFontSize); // Update state only if it changes
        }
      }
    };

    adjustFontSize();
    // Adding the event listener for resize
    window.addEventListener('resize', adjustFontSize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', adjustFontSize);
  }, [fontSize, data]); // Added 'data' to the dependency array

  return (
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`} ref={containerRef}>
      <div className="flex flex-col items-center h-full p-4 space-y-2 overflow-hidden text-center bg-gray-900 border border-gray-800 rounded-md shadow-lg">
        <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-md bg-gray-700 text-gray-300 inline-block">
          Year discovered
        </span>
        <span
          ref={textRef}
          className="font-bold text-center text-gray-300"
          style={{ fontSize: `${fontSize}px` }}
        >
          {isValidData ? data : 'None'}
        </span>
      </div>
    </div>
  );
}
