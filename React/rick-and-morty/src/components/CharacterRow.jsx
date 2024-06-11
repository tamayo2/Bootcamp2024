import React from 'react';
import '../styles/CharacterRow.css'

const CharacterRow = ({ character }) => {
  return (
    <tr>
      <td>{character.name}</td>
      <td><img src={character.image} alt={character.name} /></td>
      <td><img src={character.alterEgoImage} alt={`${character.name} alter ego`} /></td>
    </tr>
  );
};

export default CharacterRow;

