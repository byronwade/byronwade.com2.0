'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export function ScrollingImage({
  src,
  alt,
  containerHeight = 600,
  scrollStep = 10, // Smaller step for smoother scrolling
  scrollDelay = 20, // Adjust for desired scroll speed
  restartDelay = 3000
}) {
  const imageRef = useRef(null);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [maxScrollHeight, setMaxScrollHeight] = useState(0);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    if (imageRef.current) {
      const imageHeight = imageRef.current.offsetHeight;
      const maxScroll = imageHeight - containerHeight;
      setMaxScrollHeight(maxScroll > 0 ? maxScroll : 0);
    }
  }, [containerHeight, src]);

  useEffect(() => {
    let scrollInterval;

    if (isScrolling) {
      scrollInterval = setInterval(() => {
        setCurrentScrollPosition((prevPosition) => {
          const newPosition = prevPosition + scrollStep;
          if (newPosition < maxScrollHeight) {
            return newPosition;
          } else {
            clearInterval(scrollInterval); // Stop scrolling
            setTimeout(() => {
              setCurrentScrollPosition(0); // Reset to top after delay
              setIsScrolling(true); // Enable scrolling again
            }, restartDelay);
            return maxScrollHeight; // Stay at bottom during delay
          }
        });
      }, scrollDelay);
    }

    return () => clearInterval(scrollInterval);
  }, [isScrolling, maxScrollHeight, scrollStep, scrollDelay, restartDelay]);

  useEffect(() => {
    // Initial delay before starting scrolling
    const initialDelay = setTimeout(() => setIsScrolling(true), restartDelay);
    return () => clearTimeout(initialDelay);
  }, [restartDelay]);

  return (
    <div
      className="w-full rounded-lg border border-neutral-800"
      style={{
        height: `${containerHeight}px`,
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        width={1100}
        height={maxScrollHeight}
        className="w-full rounded-lg"
        style={{
          position: 'absolute',
          top: `-${currentScrollPosition}px`,
          transition: 'top 1s linear'
        }}
      />
    </div>
  );
}
