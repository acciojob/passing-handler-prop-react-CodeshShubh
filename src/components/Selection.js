import React, { useState } from 'react';

const Selection = ({ index, selectedColor }) => {
  const [boxColor, setBoxColor] = useState({ background: "" });

  const handleBoxClick = () => {
    setBoxColor(selectedColor);
  };

  return (
    <div
      className="fix-box"
      style={{ ...boxColor, backgroundColor: boxColor.background || 'rgb(255, 153, 51)' }}
      onClick={handleBoxClick}
    >
      Selection {index + 1}
    </div>
  );
};

export default Selection;