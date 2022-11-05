import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const DeleteModal = ({ deleteModalShow, setDeleteModalShow, handleDelete, confirmDelete}) => {

  return (
    <Modal show={deleteModalShow} onHide={() => setDeleteModalShow(false)} >
      <Modal.Header closeButton>
        <Modal.Title>Borrar usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className='d-flex justify-content-center mb-4'>Esta seguro que desea borrar el usuario?</h5>
        <div className='d-flex justify-content-evenly'>
          <Button 
            variant="danger"
            className='w-25' 
            onClick={() => {
              confirmDelete();
            }}>
            Si
          </Button>
          <Button 
            variant="secondary"
            className='w-25' 
            onClick={() => setDeleteModalShow(false)}>
            No
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default DeleteModal