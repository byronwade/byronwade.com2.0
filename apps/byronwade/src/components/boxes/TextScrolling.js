'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const ScrollingWords = () => {
  useEffect(() => {
    gsap.to('.word', {
      y: -20, // Adjust based on the size of your words
      ease: 'none',
      repeat: -1, // Infinite loop
      duration: 1, // Speed of animation
      stagger: {
        each: 0.5, // Time between each word's animation
        repeat: -1 // Infinite loop for each word
      }
    });
  }, []);

  return (
    <div className="h-10 overflow-hidden">
      <div className="text-lg word whitespace-nowrap">These</div>
      <div className="text-lg word whitespace-nowrap">Are</div>
      <div className="text-lg word whitespace-nowrap">Words</div>
      <div className="text-lg word whitespace-nowrap">Words</div>
      <div className="text-lg word whitespace-nowrap">Words</div>
    </div>
  );
};

export default ScrollingWords;
