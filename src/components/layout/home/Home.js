import React from "react";
import Table from "../../table/Table";
// import Counter from "../../counter/Counter";
import './home.css';

const Home = () => {
  const personajes = [
    {
      nombre: 'awdawd',
      id: 1,
      sexo: 'masculino'
    },
    {
      nombre: 'awdawdawdwad',
      id: 2,
      sexo: 'femenino'
    },
    {
      nombre: 'tryhtfhtfh',
      id: 3,
      sexo: 'masculino'
    },
    {
      nombre: 'vbnvbnvb',
      id: 4,
      sexo: 'femenino'
    },
  ]

  return (
    <div className="Home_container">
      {/* <Counter /> */}
      <Table data={personajes} />
    </div>
  );
};

export default Home;
