import React from "react";
import { Modal } from "react-bootstrap";
import Form from "../../../form/Form";
// const { Header } = Modal;

const EditModal = (props) => {
  const {
    show,
    setShow,
    handleEdit,
    userToEdit,
    changeInputValue,
  } = props;
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      {/* <Header></Header> */}
      <Modal.Header closeButton>
        <Modal.Title>Crear usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          handleSubmit={handleEdit} 
          isEditingForm={true}
          userToEdit={userToEdit}
          changeInputValue={changeInputValue}
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
