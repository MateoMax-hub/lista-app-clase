import React from 'react';
import {Modal} from "react-bootstrap";
import Form from '../../../form/Form';
/* const {Header} = Modal; */

export const EditModal = (props) => {
    const {
        show,
        setShow ,
        handleEdit ,
        userToEdit,
        changeInputValue,
    } = props
    
    return (
    <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Crear Usuaio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form 
                handleSubmit={handleEdit} 
                isEditingForm={true} 
                userToEdit={userToEdit}
                changeInputValue={changeInputValue} />
        </Modal.Body>
    </Modal>
)
}