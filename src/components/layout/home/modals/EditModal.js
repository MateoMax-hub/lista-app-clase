import React from 'react'
import { Modal } from 'react-bootstrap'
import Form from '../../../form/Form'

const EditModal = (props) => {
  const {
    editModalShow,
    setEditModalShow,
    handleSubmit,
    isEditingForm,       
    userToEdit,
    changeInputValue,
  } = props;
  
  return (
    <Modal show={editModalShow} onHide={() => setEditModalShow(false)} >
      <Modal.Header closeButton>
        <Modal.Title>Editar usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form 
        handleSubmit={handleSubmit} 
        isEditingForm={isEditingForm}
        userToEdit={userToEdit}
        changeInputValue={changeInputValue}
        />
      </Modal.Body>
    </Modal>
  )
}

export default EditModal