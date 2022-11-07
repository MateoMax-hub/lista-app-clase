import React from 'react';
import {Modal} from "react-bootstrap";
import Form from '../../../form/Form';
/* const {Header} = Modal; */

export const CreateModal = ({show, setShow, handleSubmit}) => {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Crear Usuaio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form handleSubmit={handleSubmit}/>
        </Modal.Body>
    </Modal>
  )
}
