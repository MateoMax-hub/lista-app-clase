import React from "react";
import { Button } from "react-bootstrap";
import './form.css';

const Form = (props) => {
  const {
    handleSubmit, 
    isEditingForm, 
    userToEdit, 
    changeInputValue,
  } = props;

  return (
    <div className="Form_container">
      <form onSubmit={ handleSubmit }>
        <div>
          <div>
            <b>Nombre:</b> 
            {
              isEditingForm ? (
                <input 
                name="nombre" 
                value={userToEdit?.nombre || ''} 
                onChange={(e) => changeInputValue(e)}
                />
                ) : ( <input name="nombre"/> )
              }
          </div>
          <div>
            <b>Apellido:</b>
            {
              isEditingForm ? (
                <input 
                  name="apellido" 
                  value={userToEdit?.apellido || ''} 
                  onChange={(e) => changeInputValue(e)}
                />
              ) : ( <input name="apellido"/> )
            }
          </div>
          <div>
            <b>Email:</b>
            {
              isEditingForm ? (
                <input 
                  name="email" 
                  value={userToEdit?.email || ''} 
                  onChange={(e) => changeInputValue(e)}
                />
              ) : ( <input name="email"/> )
            }
          </div>
          <div>
            <b>Genero:</b>
            {
              isEditingForm ? (
                <input 
                  name="genero" 
                  value={userToEdit?.genero || ''} 
                  onChange={(e) => changeInputValue(e)}
                />
              ) : ( <input name="genero"/> )
            }
          </div>
          <div>
            <Button variant="secondary" type="submit"> {
              isEditingForm ? 'Editar usuario' : 'Crear usuario'
            }
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
