import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Button } from "react-bootstrap";
import './rickAndMortyPage.css';
import DetailsModal from "../home/modals/DetailsModal";

const RickAndMortyPage = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const [charToShow, setCharToShow] = useState({});

  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const [searchFilter, setSearchFilter] = useState('');
    
    useEffect(() => {
      handleGetCharacters();
    }, [page, searchFilter]);
    
  const handleGetCharacters = async () => {
    try {
      setIsLoading(true);
      // fetch('https://rickandmortyapi.com/api/character').then(response => response.json()).then(data => console.log(data))
      const { data } = await axios('https://rickandmortyapi.com/api/character', { params: { page, name: searchFilter } });
      setPagesCount(data.info?.pages);
      setCharactersData(data.results);
      setIsLoading(false);
    } catch (error) {
      if (error?.response?.data?.error === 'There is nothing here') {
        setCharactersData([]);
      } else {
        alert('Algo salio mal intente mas tarde');
      }
      setIsLoading(false);
    }
  };

  const datailsModalToggle = (showChar) => {
    setCharToShow(showChar);
    setDetailsModalShow(true);
  };

  const handleSearch = (e) => {
    setSearchFilter(e.target?.value);
    setPage(1);
  };

  return (
    <div className="RickAndMortyPage_container">
      <div className="w-100 d-flex justify-content-center">
        <div className="w-25">
          <input
            placeholder="Buscar..."
            onChange={(e) => handleSearch(e)}
            className='w-100'
          />
        </div>
      </div>

      <Row xs={1} sm={2} md={3} lg={4} className="g-0">
        {
          !isLoading ? (
            charactersData.length !== 0 ? (
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
              <>no hay personajes para tu busqueda</>
            )
          ) : (
            <>Loading...</>
          )
        }
      </Row>

      <div className="w-100 d-flex justify-content-center mb-3">
        <div className="w-25 d-flex justify-content-evenly align-items-center">
          <Button
            onClick={() => setPage(page - 1)} 
            variant="secondary"
            disabled={page === 1}
          >
            {'<'}
          </Button>
          <b>Pagina: {page}</b>
          <Button
            onClick={() => setPage(page + 1)} 
            variant="secondary"
            disabled={page === pagesCount}
          >
            {'>'}
          </Button>
        </div>
      </div>

      <DetailsModal 
        show={detailsModalShow} 
        setShow={setDetailsModalShow}
        charToShow={charToShow}
      />
    </div>
  );
};

export default RickAndMortyPage;
