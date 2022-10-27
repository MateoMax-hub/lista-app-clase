import React, { useEffect, useState } from "react";
import './table.css';

const Table = ({ data }) => {
  // const { personajesData } = props;
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
          <th>genero</th>
        </tr>
      </thead>

      <tbody>
        {
          dataForTable?.map((personaje) => (
            <tr key={personaje.id}>
              <td>{personaje.id}</td>
              <td>{personaje.nombre}</td>
              <td>{personaje.sexo}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
