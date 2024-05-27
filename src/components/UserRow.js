import React from 'react';
import './UserRow.css';

const UserRow = ({ user, deleteUser }) => {
  return (
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
