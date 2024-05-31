import React from 'react';

const ChangeButton = ({ onClick }) => {
  return (
    <button className="change-button" onClick={onClick}>
      Change Fact
    </button>
  );
};

export default ChangeButton;