import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteModal = ({ show, setShow, userData, handleConfirmDelete }) => {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Title>
        <div className="p-2">
          Seguro que desea eliminar a {userData.nombre} {userData.apellido}?
        </div>
      </Modal.Title>
      <Modal.Footer>
        <Button variant="danger" onClick={handleConfirmDelete}>Eliminar</Button>
        <Button variant="secondary" onClick={() => setShow(false)}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
