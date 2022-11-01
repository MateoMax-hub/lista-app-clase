import React from "react";
import './form.css';

const Form = ({ handleSubmit, isEditingForm, userToEdit }) => {
  return (
    <div className="Form_container">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <b>nombre:</b>
              <input name="nombre" defaultValue={userToEdit?.nombre}/>
            </div>
            <div>
              <b>genero:</b>
              <input name="genero" defaultValue={userToEdit?.genero}/>
            </div>
            <div>
              <b>apellido:</b>
              <input name="apellido" defaultValue={userToEdit?.apellido}/>
            </div>
            <div>
              <b>email:</b>
              <input name="email" defaultValue={userToEdit?.email}/>
            </div>
            <div>
              <button type="submit">
                {
                  isEditingForm ? 'Editar usuario' : 'Crear usuario'
                }
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
