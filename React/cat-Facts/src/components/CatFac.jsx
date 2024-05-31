import React from 'react';

const CatFact = ({ fact }) => {
  return (
    <div className="cat-fact">
      <h1>Cat Fact</h1>
      <p>{fact}</p>
    </div>
  );
};

export default CatFact;