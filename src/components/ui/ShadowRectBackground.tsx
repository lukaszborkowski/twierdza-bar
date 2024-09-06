//@ts-nocheck
"use client"
import React, { useState } from 'react';

export const ShadowRectBackground = ({ rows = 40, columns = 40, gap = 2 }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const renderDivs = () => {
    const divs = [];

    for (let row = 0; row < rows; row++) {
      const rowDivs = [];

      for (let col = 0; col < columns; col++) {
        const index = row * columns + col;
        const hasShadow = index % 2 !== 0;

        rowDivs.push(
          <div
            key={index}
            className={`bg-gray-50  ${
              hasShadow
                ? "shadow-[0px_0px_0px_3px_rgba(255,255,255,1)_inset] "
                : ""
            }`}
            style={{
              aspectRatio: '2 / 1',
              width: '100%',
              transition: 'background-color 0.3s ease',
              backgroundColor:
                hoveredIndex === index ? 'var(--neutral-100)' : '',
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          ></div>
        );
      }

      if (row % 2 !== 0) {
        rowDivs.reverse();
      }

      divs.push(...rowDivs);
    }

    return divs;
  };

  return (
    <div
      className="grid bg-gray-100 d w-full h-full"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: `${gap}px`,
      }}
    >
      {renderDivs()}
    </div>
  );
};
