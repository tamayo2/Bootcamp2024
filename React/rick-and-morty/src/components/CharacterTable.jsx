import React, { useEffect, useState } from "react";
import CharacterRow from "./CharacterRow";
import '../styles/CharacterTable.css'

const CharacterTable = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();

        const charactersWithAlterEgos = await Promise.all(
          data.results.slice(0, 10).map(async (character) => {
            const alterEgoImage = await fetchAlterEgoImage(
              character.name,
              character.id
            );
            return {
              name: character.name,
              image: character.image,
              alterEgoImage: alterEgoImage,
            };
          })
        );

        setCharacters(charactersWithAlterEgos);
      } catch (error) {
        setError(error);
      }
    };

    const fetchAlterEgoImage = async (name, id) => {
      try {
        let [nombre] = name.split(" ");
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(
            nombre
          )}`
        );
        if (!response.ok) throw new Error("La direccion no es correcta");
        const data = await response.json();

        if (!data.results.length) throw new Error("No se encontraron personajes");

        let alterEgoId;

        if (data.results.length === 1) {
          const randomPage = Math.floor(Math.random() * 42) + 1;
          const randomResponse = await fetch(
            `https://rickandmortyapi.com/api/character/?page=${randomPage}`
          );
          const randomData = await randomResponse.json();
          alterEgoId = Math.floor(Math.random() * randomData.results.length);
          const alterEgo = randomData.results[alterEgoId];
          return alterEgo ? alterEgo.image : null;
        } else {
          for (let i = 0; i < 100; i++) {
            const randomIndex = Math.floor(Math.random() * data.results.length);
            if (data.results[randomIndex].id !== id) {
              alterEgoId = randomIndex;
              break;
            }
          }
        }

        const alterEgo = data.results[alterEgoId];
        return alterEgo ? alterEgo.image : null;
      } catch (error) {
        console.log(error);
        return null;
      }
    };

    fetchCharacters();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Alter Ego</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <CharacterRow key={index} character={character} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CharacterTable;