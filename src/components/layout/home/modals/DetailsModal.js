import React, {useState, useEffect} from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";

const DetailsModal = ({ show, setShow, id }) => {
  const [character, setCharacter] = useState({})

  useEffect(() => {
    handleGetCharacter();
  }, [show])
  
  const handleGetCharacter = async () => {
    try {
      const { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(data);
    } catch (error) {
      if (error?.response?.data?.error === 'Character not found'){
        setCharacter({});
        alert('no hay personaje especifico');
      }
    }
  }

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          Detalles de {character.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <ul>
            <li>Genero: {character.gender}</li>
            <li>Especie y Tipo: {character.species} / { character.type !== '' ? (character.type) : ('-')}</li>
            <li>Estado Actual: {character.status}</li>
            <li>Origen: {character.origin?.name}</li>
            <li>Ubicacion Actual: {character.location?.name}</li>
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        Aparece en {character.episode?.length} episodios
      </Modal.Footer>
    </Modal>
  );
};

export default DetailsModal;
