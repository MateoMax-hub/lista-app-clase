import './home.css';
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "../../table/Table";
// import Counter from "../../counter/Counter";
import { CreateModal } from "./modals/CreateModal";
import { EditModal } from "./modals/EditModal";
import {DeleteModal} from "./modals/DeleteModal"

const Home = () => {
  const [usuarios, setUsuarios] = useState([
    {
      nombre: 'awdawd',
      apellido: 'awdaw123d',
      email: 'awd@email.com',
      id: 2,
      genero: 'masculino'
    },
    {
      nombre: 'awdawd',
      apellido: 'awdaw123d',
      email: 'awd@email.com',
      id: 3,
      genero: 'masculino'
    },
    {
      nombre: 'awdawd',
      apellido: 'awdaw123d',
      email: 'awd@email.com',
      id: 4,
      genero: 'masculino'
    },
    {
      nombre: 'awdawd',
      apellido: 'awdaw123d',
      email: 'awd@email.com',
      id: 5,
      genero: 'masculino'
    },
  ]);

  const [userToEdit, setUserToEdit] = useState({});
  const [createModalShow, setCreateModalShow] = useState(false)
  const [editModalShow, setEditModalShow] = useState(false)
  const [deleteModalShow, setDeleteModalShow] = useState(false)
  const [selectedUser, setSelectedUser] = useState()

  const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = { id: generateId() };
    for (const target of e.target) {
      if (target.type !== 'submit') {
        usuario[target.name] = target.value;
        target.value = '';
      }
    }
    setUsuarios([...usuarios, usuario]);
    setCreateModalShow(false)
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const nuevoUsuario = { id: userToEdit.id };
    for (const target of e.target) {
      if (target.type !== 'submit') {
        nuevoUsuario[target.name] = target.value;
        target.value = '';
      }
    }
    const newUsers = usuarios.map((usuario) => {
      if (usuario.id === nuevoUsuario.id) return nuevoUsuario;
      return usuario;
    });
    setUsuarios(newUsers);
    setEditModalShow(false)
  };

  const showDeleteModal = (id) => {
    setSelectedUser(id)
    setDeleteModalShow(true)
  };

  const handleDelete = () => {
    const usuariosFiltrados = usuarios.filter((usuario) => usuario.id !== selectedUser);
    setUsuarios(usuariosFiltrados); 
    setDeleteModalShow(false)
  };
  

  const editTrigger = (editingUser) => {
    setUserToEdit(editingUser);
    setEditModalShow(true)
  }

  const changeInputValue = (e) =>{
    setUserToEdit({...userToEdit, [e.target.name]: e.target.value})
  }

  return (
    <div className="Home_container">
      <Button variant="secondary" onClick={() => setCreateModalShow(true)}>Crear Usuario</Button>
      <Table 
        showDeleteModal={showDeleteModal}
        data={usuarios} 
        handleDelete={handleDelete} 
        editTrigger={editTrigger} 
      />
      {/* <Counter /> */}
      <CreateModal 
        handleSubmit={handleSubmit} 
        show={createModalShow} 
        setShow={setCreateModalShow}
      />
      <EditModal 
        show={editModalShow} 
        setShow={setEditModalShow} 
        handleEdit={handleEdit} 
        userToEdit={userToEdit}
        changeInputValue={changeInputValue}
      />   
      <DeleteModal
        data={usuarios}
        show={deleteModalShow}
        setShow={setDeleteModalShow}
        handleDelete={handleDelete} 
      />     
    </div>
  );
};

export default Home;
