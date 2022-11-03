import React from "react";
import { Button } from "react-bootstrap";
import './form.css';

const Form = ({ handleSubmit, isEditingForm, userToEdit, changeInputValue }) => {
  return (
    <div className="Form_container">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <b>nombre:</b>
              {
                isEditingForm ? (
                  <input name="nombre" value={userToEdit?.nombre || ''} onChange={(e) => changeInputValue(e)}/>
                ) : (
                  <input name="nombre"/>
                )
              }
            </div>
            <div>
              <b>genero:</b>
              {
                isEditingForm ? (
                  <input name="genero" value={userToEdit?.genero || ''} onChange={(e) => changeInputValue(e)}/>
                ) : (
                  <input name="genero"/>
                )
              }
            </div>
            <div>
              <b>apellido:</b>
              {
                isEditingForm ? (
                  <input name="apellido" value={userToEdit?.apellido || ''} onChange={(e) => changeInputValue(e)}/>
                ) : (
                  <input name="apellido"/>
                )
              }
            </div>
            <div>
              <b>email:</b>
              {
                isEditingForm ? (
                  <input name="email" value={userToEdit?.email || ''} onChange={(e) => changeInputValue(e)}/>
                ) : (
                  <input name="email"/>
                )
              }
            </div>
            <div>
              <Button variant="secondary" type="submit">
                {
                  isEditingForm ? 'Editar usuario' : 'Crear usuario'
                }
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
