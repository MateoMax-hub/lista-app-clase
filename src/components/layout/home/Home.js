import React, { useState } from "react";
import Form from "../../form/Form";
import Table from "../../table/Table";
// import Counter from "../../counter/Counter";
import './home.css';

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
  };

  const handleDelete = (id) => {
    const usuariosFiltrados = usuarios.filter((usuario) => usuario.id !== id);
    setUsuarios(usuariosFiltrados);
  };

  const editTrigger = (editingUser) => {
    setUserToEdit(editingUser);
  }

  return (
    <div className="Home_container">
      <Form handleSubmit={handleSubmit} />
      <Form 
        handleSubmit={handleEdit} 
        isEditingForm={true} 
        userToEdit={userToEdit}
      />
      <Table 
        data={usuarios} 
        handleDelete={handleDelete} 
        editTrigger={editTrigger} 
      />
      {/* <Counter /> */}
    </div>
  );
};

export default Home;
