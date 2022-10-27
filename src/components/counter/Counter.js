import React, { useEffect, useState } from "react";

const Counter = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    validadorDiez();
  }, [contador]);

  const validadorDiez = () => {
    if (contador === 10) {
      setContador("LLEGASTE A 10!");
    }
  };

  return (
    <>
      <div>{contador}</div>
      <div>
        <button onClick={() => setContador(contador - 1)}>restar!</button>
        <button onClick={() => setContador(0)}>reiniciar!</button>
        <button onClick={() => setContador(contador + 1)}>sumar!</button>
      </div>
    </>
  );
};

export default Counter;
