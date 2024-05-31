import React, { useState, useEffect } from 'react';
import CatFact from './components/CatFact.jsx';
import CatImage from './components/CatImage.jsx';
import ChangeButton from './components/ChangeButton.jsx';

const App = () => {
  const [fact, setFact] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const fetchCatFact = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      const firstWord = data.fact.split(' ')[0];
      setFact(data.fact);

      const imgResponse = await fetch('https://api.thecatapi.com/v1/images/search?limit=1');
      const imgData = await imgResponse.json();
      setImageUrl(imgData[0].url);

      console.log(`First word of the fact: ${firstWord}`);
      console.log(`Image URL: ${imgData[0].url}`);
    } catch (error) {
      console.error('Error fetching cat data:', error);
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="app">
      <CatFact fact={fact} />
      <CatImage imageUrl={imageUrl} />
      <ChangeButton onClick={fetchCatFact} />
    </div>
  );
};

export default App;