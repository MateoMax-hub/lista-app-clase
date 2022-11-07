import React from 'react';
import {Modal} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
/* const {Header} = Modal; */

export const DeleteModal = ({show, setShow, handleDelete}) => {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Borrar Usuaio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            ¿Esta seguro de querer borrar el usuario?
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>Cancelar</Button>
            <Button variant="primary" onClick={() => handleDelete()}>Borrar</Button>
        </Modal.Footer>
    </Modal>
  )
}
