import React from 'react';

const CatImage = ({ imageUrl }) => {
  return (
    <div className="cat-image">
      {imageUrl ? <img src={imageUrl} alt="Cat" /> : <p>Loading image...</p>}
    </div>
  );
};

export default CatImage;