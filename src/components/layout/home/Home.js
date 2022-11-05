import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import CreateModal from "./modals/CreateModal";
import EditModal from "./modals/EditModal";
import DeleteModal from "./modals/DeleteModal";
import Table from "../../table/Table";
import "./home.css";

const Home = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [userToEdit, setUserToEdit] = useState({});
  const [deleteUser, setDeleteUser] = useState({});

  const [createModalShow, setCreateModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);

  const generateId = function () {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = { id: generateId() };
    for (const target of e.target) {
      if (target.type !== "submit") {
        usuario[target.name] = target.value;
        target.value = "";
      }
    }
    setUsuarios([...usuarios, usuario]);
    setCreateModalShow(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const nuevoUsuario = { id: userToEdit.id };
    for (const target of e.target) {
      if (target.type !== "submit") {
        nuevoUsuario[target.name] = target.value;
        target.value = "";
      }
    }
    const newUsers = usuarios.map((usuario) => {
      if (usuario.id === nuevoUsuario.id) return nuevoUsuario;
      return usuario;
    });
    setUsuarios(newUsers);
    setEditModalShow(false);
  };

  const handleDelete = (usuario) => {
    setDeleteUser(usuario);
    setDeleteModalShow(true);
  };
  
  const confirmDelete = (id) => {
    const usuariosFiltrados = usuarios.filter((usuario) => usuario.id !== deleteUser.id);
    setUsuarios(usuariosFiltrados);
    setDeleteModalShow(false);
  }

  const editTrigger = (editingUser) => {
    setUserToEdit(editingUser);
    setEditModalShow(true);
  };

  const changeInputValue = (e) => {
    setUserToEdit({ ...userToEdit, [e.target.name]: e.target.value });
  };

  return (
    <div className="Home_container">
      <div className="Table_container">
        <Table
          data={usuarios}
          deleteModalShow={deleteModalShow}
          setDeleteModalShow={setDeleteModalShow}
          handleDelete={handleDelete}
          editTrigger={editTrigger}
        />
      </div>

      <Button 
        variant="success" 
        onClick={() => setCreateModalShow(true)}
        className="d-flex justify-content-center align-items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
        </svg>
        <p className="p-0 mx-2 m-0">        
          Crear usuario
        </p>
      </Button>
      
      <CreateModal
        createModalShow={createModalShow}
        setCreateModalShow={setCreateModalShow}
        handleSubmit={handleSubmit}
      />
      <EditModal
        editModalShow={editModalShow}
        setEditModalShow={setEditModalShow}
        handleSubmit={handleEdit}
        isEditingForm={true}
        userToEdit={userToEdit}
        changeInputValue={changeInputValue}
      />
      <DeleteModal 
        deleteModalShow={deleteModalShow}
        setDeleteModalShow={setDeleteModalShow}
        handleDelete={handleDelete}
        confirmDelete={confirmDelete}
      />
    </div>
  );
};

export default Home;
