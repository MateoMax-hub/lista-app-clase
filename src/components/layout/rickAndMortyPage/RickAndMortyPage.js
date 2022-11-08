import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import './rickAndMortyPage.css';

const RickAndMortyPage = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // fetch('https://rickandmortyapi.com/api/character').then(response => response.json()).then(data => console.log(data))
    handleGetCharacters();
  }, []);

  const handleGetCharacters = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios('https://rickandmortyapi.com/api/character');
      setCharactersData(data.results);
      setIsLoading(false);
    } catch (error) {
      alert('No se pudieron traer los personajes intente luego');
      setIsLoading(false);
    }
  };

  return (
    <div className="RickAndMortyPage_container">
      {
        !isLoading ? (
          charactersData?.map((character) => (
            <Card className="RickAndMortyPage_card" key={character.id}>
              <Card.Img variant="top" src={character.image}/>
              <Card.Title>
                {character.name}
              </Card.Title>
            </Card>
          ))
        ) : (
          <>Loading...</>
        )
      }
    </div>
  );
};

export default RickAndMortyPage;
