import React from "react";
import { Modal } from "react-bootstrap";

const DetailsModal = ({ show, setShow, charToShow}) => {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          Detalles de {charToShow.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <ul>
            <li>Genero: {charToShow.gender}</li>
            <li>Especie y Tipo: {charToShow.species} / { charToShow.type !== '' ? (charToShow.type) : ('-')}</li>
            <li>Estado Actual: {charToShow.status}</li>
            <li>Origen: {charToShow.origin.name}</li>
            <li>Ubicacion Actual: {charToShow.location.name}</li>
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        Aparece en {charToShow.episode.length} episodios
      </Modal.Footer>
    </Modal>
  );
};

export default DetailsModal;
