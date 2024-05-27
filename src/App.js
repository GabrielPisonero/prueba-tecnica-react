import React, { useEffect, useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.fake-rest.refine.dev/users')
      .then(response => response.json())
      .then(data => {
        const activeUsers = data.filter(user => user.status);
        setUsers(activeUsers);
      })
      .catch(error => console.error('Error al obtener usuarios:', error));
  }, []);

  const addUser = (user) => {
    const newUser = { ...user, id: users.length + 1, status: true };
    setUsers([...users, newUser]);
  };

  const deleteUser = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <div className="container">
      <h1>Gestión de Usuarios</h1>
      <AddUserForm addUser={addUser} />
      <UserTable users={users} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
