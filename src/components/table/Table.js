import React, { useEffect, useState } from "react";
import { Button, Table as BootstrapTable } from "react-bootstrap";
import './table.css';

const Table = ({ data, handleDelete, editTrigger }) => {
  // const { data, handleDelete, editTrigger } = props;
  const [dataForTable, setDataForTable] = useState([]);

  useEffect(() => {
    setDataForTable(data);
  }, [data])
  
  return (
    <BootstrapTable striped bordered variant="dark">
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
                <Button variant="outline-light" onClick={() => handleDelete(usuario.id)}>borrar</Button>
              </td>
              <td>
                <Button variant="outline-light" onClick={() => editTrigger(usuario)}>Editar</Button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </BootstrapTable>
  );
};

export default Table;
