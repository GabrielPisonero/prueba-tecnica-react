import React, { useState } from 'react';
import './AddUserForm.css';

// Se define el componente AddUserForm y recibe una función addUser como prop
const AddUserForm = ({ addUser }) => {
  // Se define el estado para firstName, lastName y el email con el hook useState
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // Se define la función handleSubmit que se ejecutará cuando se envíe el formulario
  const handleSubmit = (e) => {
    // Se previene la recarga de la página que es el comportamiento por defecto de los formularios
    e.preventDefault();
    // Se llama a la función addUser (pasada como prop) con un objeto que contiene firstName, lastName y el email
    addUser({ firstName, lastName, email });
    // Resetea los valores de firstName, lastName y el email a vacío
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  // Se renderiza el componente
  return (
    // Cuando se envía el formulario, se llama a la función handleSubmit
    <form className="add-user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
