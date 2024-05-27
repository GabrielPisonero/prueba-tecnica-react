import React from 'react';
import './UserTable.css';
import UserRow from './UserRow';

// Componente que renderiza la tabla de usuarios
const UserTable = ({ users, deleteUser }) => {
  return (
    // Se renderiza la tabla de usuarios con las filas de usuarios
    <table className="user-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <UserRow key={user.id} user={user} deleteUser={deleteUser} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
