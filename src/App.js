import React, { useEffect, useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import './App.css';

// Se define el componente App
const App = () => {
  // Se define el estado de los usuarios con el hook useState
  const [users, setUsers] = useState([]);

  // Se define un efecto con el hook useEffect que se ejecuta una vez al montar el componente
  // Este efecto obtiene los usuarios de una API y los guarda en el estado
  useEffect(() => {
    fetch('https://api.fake-rest.refine.dev/users')
      .then(response => response.json())
      .then(data => {
        const activeUsers = data.filter(user => user.status);
        setUsers(activeUsers);
      })
      .catch(error => console.error('Error al obtener usuarios:', error));
  }, []);

  // Se define una función para agregar un usuario al estado
  const addUser = (user) => {
    const newUser = { ...user, id: users.length + 1, status: true };
    setUsers([...users, newUser]);
  };

  // Se define una función para eliminar un usuario del estado
  const deleteUser = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  // Se renderiza el componente
  return (
    <div className="container">
      <h1>Gestión de Usuarios</h1>
      <AddUserForm addUser={addUser} />
      <UserTable users={users} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
