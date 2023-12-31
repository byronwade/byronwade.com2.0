import React from 'react';

const BentoContainer = ({ gap, row, col, children }) => {
  return <div className={`grid grid-rows-${row} grid-cols-${col} gap-${gap}`}>{children}</div>;
};

export default BentoContainer;
