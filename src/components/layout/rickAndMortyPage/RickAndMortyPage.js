import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";
import './rickAndMortyPage.css';
import DetailsModal from "../home/modals/DetailsModal";

const RickAndMortyPage = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const [charToShow, setCharToShow] = useState({});

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

  const datailsModalToggle = (showChar) => {
    setCharToShow(showChar);
    setDetailsModalShow(true);
  };

  return (
    <div className="RickAndMortyPage_container">
      <Row xs={1} sm={2} md={3} lg={4} className="g-0">
        {
          !isLoading ? (
            charactersData?.map((character) => (
              <Col
                className="d-flex justify-content-center"
                key={character.id}
                onClick={() => datailsModalToggle(character)}
              >
                <Card className="RickAndMortyPage_card">
                  <Card.Img variant="top" src={character.image}/>
                  <Card.Title className="text-center my-3">
                    {character.name}
                  </Card.Title>
                </Card>
              </Col>
            ))
            ) : (
              <>Loading...</>
          )
        }
      </Row>

      <DetailsModal 
        show={detailsModalShow} 
        setShow={setDetailsModalShow}
        charToShow={charToShow}
      />
    </div>
  );
};

export default RickAndMortyPage;
