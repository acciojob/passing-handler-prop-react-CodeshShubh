import React from 'react';

const ColourSelector = ({ config, handleColorSelection }) => {
  const { label, background, classname } = config;

  return (
    <button
      className={classname}
      style={{ background }}
      onClick={() => handleColorSelection({ background })}
    >
      {label}
    </button>
  );
};

export default ColourSelector;