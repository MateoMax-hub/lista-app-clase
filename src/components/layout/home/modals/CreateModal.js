import React from 'react'
import { Modal } from 'react-bootstrap'
import Form from '../../../form/Form'

const CreateModal = ({ createModalShow, setCreateModalShow, handleSubmit }) => {
  return (
    <Modal show={createModalShow} onHide={() => setCreateModalShow(false)} >
      <Modal.Header closeButton>
        <Modal.Title>Crear usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form handleSubmit={handleSubmit} />
      </Modal.Body>
    </Modal>
  )
}

export default CreateModal