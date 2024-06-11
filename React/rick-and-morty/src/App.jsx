import React from 'react';
import CharacterTable from './components/CharacterTable';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <CharacterTable />
    </div>
  );
};

export default App;
