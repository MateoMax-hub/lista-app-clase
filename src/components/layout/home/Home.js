import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "../../table/Table";
import './home.css';
import CreateModal from "./modals/CreateModal";
import DeleteModal from "./modals/DeleteModal";
import EditModal from "./modals/EditModal";

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
  const [userToDelete, setUserToDelete] = useState({});
  const [createModalShow, setCreateModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteConfirmshow, setDeleteConfirmShow] = useState(false);

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
    setUsuarios([...usuarios, usuario])
    setCreateModalShow(false);
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
    setEditModalShow(false);
  };

  const handleDelete = (user) => {
    setDeleteConfirmShow(true);
    setUserToDelete(user);
  };

  const handleConfirmDelete = () => {
    const usuariosFiltrados = usuarios.filter((usuario) => usuario.id !== userToDelete.id);
    setUsuarios(usuariosFiltrados);
    setDeleteConfirmShow(false);
  };

  const editTrigger = (editingUser) => {
    setUserToEdit(editingUser);
    setEditModalShow(true)
  }

  const changeInputValue = (e) => {
    setUserToEdit({...userToEdit, [e.target.name]: e.target.value});
  };

  return (
    <div className="Home_container">
      <Button variant='secondary' onClick={() => setCreateModalShow(true)}>Crear usuario</Button>
      <Table
        data={usuarios} 
        handleDelete={handleDelete} 
        editTrigger={editTrigger} 
      />

      <CreateModal 
        show={createModalShow} 
        setShow={setCreateModalShow}
        handleSubmit={handleSubmit}
      />
      <EditModal 
        show={editModalShow}
        setShow={setEditModalShow}
        handleEdit={handleEdit}
        userToEdit={userToEdit}
        changeInputValue={changeInputValue}
      />
      <DeleteModal 
        show={deleteConfirmshow}
        setShow={setDeleteConfirmShow}
        userData={userToDelete}
        handleConfirmDelete={handleConfirmDelete}
      />
    </div>
  );
};

export default Home;
