# Link para visualizar en render

https://prueba-tecnica-react.onrender.com

## Descripción 

Se realizó una aplicación con una interfaz de gestión de usuarios usando React y CSS para el diseño. Este muestra una lista de usuarios de una API con el status = true y permite agregar/eliminar usuarios existentes en la lista.

### Se usaron los componentes: 

App: Obtiene la lista de usuarios de la API y la pasa a otros componentes para su manipulación
UserTable: Muestra la lista de usuarios como una tabla y se conecta con el UserRow para representar cada fila de usuario
UserRow: Es cada fila individual de la tabla de usuarios, la cual muestra la información de cada usuario y tiene un botón para eliminar a un usuario específico de la lista
AddUserForm: Se encarga de agregar usuarios nuevos a la lista con los campos de nombre, apellido y correo electrónico

### Funcionamiento de la página

La página primero hace la solicitud a la API al cargar y ahí obtiene la lista de los usuarios, después filtra los que tengan el estado como 'true' y los muestra en la tabla. Posteriormente, ya el usuario puede interactuar con la página e ingresar los datos de un usuario nuevo, el cual se agrega a la lista con un botón. Además se tiene un botón para eliminar el cual muestra un mensaje de confirmación antes de eliminar a un usuario. Los estilos de la páginas son propios usando CSS
