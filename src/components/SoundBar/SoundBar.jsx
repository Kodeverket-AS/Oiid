"use client"

import React, { useEffect, useState } from 'react';
import './SoundBar.css';

const SoundBar = () => {
  
  const numberOfBars = 150;
  
  
  const MAX_HEIGHT = 160;
  
  
  const generateInitialHeights = () => {
    const heights = [];
    for (let i = 0; i < numberOfBars; i++) {

      const baseHeight = 20 + 60 * Math.sin((i / numberOfBars) * Math.PI * 4);

      const randomOffset = Math.random() * 10 - 5;
      heights.push(Math.max(10, Math.min(80, baseHeight + randomOffset)));
    }
    return heights;
  };
  
  const [barHeights, setBarHeights] = useState(generateInitialHeights());
  
 

  
  useEffect(() => {
    const animationIntervals = [];
    
    // Tworzymy interwał dla każdego słupka
    for (let i = 0; i < numberOfBars; i++) {
      const interval = setInterval(() => {
        setBarHeights(prevHeights => {
          const newHeights = [...prevHeights];
          
          const newHeight = 10 + Math.random() * 70;
          newHeights[i] = newHeight;
          return newHeights;
        });
      }, 1000 + (i * 50) % 500); 
      
      animationIntervals.push(interval);
    }
    
   
    return () => {
      animationIntervals.forEach(interval => clearInterval(interval));
    };
  }, []);
  
  return (
    <div className="soundbar-container">
      {barHeights.map((height, index) => (
        <div 
          key={index}
          className="soundbar-bar"
          style={{ 
            height: `${height}px`, 
            animationDelay: `${index * 0.1}s`
          }}
        />
      ))}
    </div>
  );
};

export default SoundBar;
