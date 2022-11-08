import React from "react";
import { Modal } from "react-bootstrap";
import Form from "../../../form/Form";
// const { Header } = Modal;

const CreateModal = ({ show, setShow, handleSubmit }) => {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      {/* <Header></Header> */}
      <Modal.Header closeButton>
        <Modal.Title>Crear usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form handleSubmit={handleSubmit} />
      </Modal.Body>
    </Modal>
  );
};

export default CreateModal;
