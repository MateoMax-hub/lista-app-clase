import React, { useEffect, useState } from "react";
import './table.css';

const Table = ({ data, handleDelete, editTrigger }) => {
  // const { data, handleDelete, editTrigger } = props;
  const [dataForTable, setDataForTable] = useState([]);

  useEffect(() => {
    setDataForTable(data);
  }, [data])
  
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>nombre</th>
          <th>apellido</th>
          <th>email</th>
          <th>genero</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {
          dataForTable?.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.email}</td>
              <td>{usuario.genero}</td>
              <td>
                <button onClick={() => handleDelete(usuario.id)}>borrar</button>
              </td>
              <td>
                <button onClick={() => editTrigger(usuario)}>Editar</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
