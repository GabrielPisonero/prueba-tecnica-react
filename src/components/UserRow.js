import React from 'react';
import './UserRow.css';

// Componente que renderiza una fila de la tabla de usuarios
const UserRow = ({ user, deleteUser }) => {
  return (
    // Se renderiza una fila de la tabla con los datos del usuario y un botón para eliminarlo
    <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>
        <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default UserRow;
