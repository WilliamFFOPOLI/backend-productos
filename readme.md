# Backend Productos

Este proyecto corresponde a una API REST desarrollada con Node.js, Express y Sequelize para la gestión de productos. La aplicación permite realizar operaciones CRUD completas y utiliza SQLite como base de datos local. El backend está organizado bajo una arquitectura por capas que facilita el mantenimiento y la escalabilidad.

Para ejecutar el proyecto es necesario contar con Node.js, npm y Git instalados en el sistema. Estas herramientas pueden verificarse ejecutando los comandos `node -v`, `npm -v` y `git --version` desde la consola.

El proyecto se instala clonando el repositorio desde GitHub. Para ello se debe ejecutar el comando `git clone https://github.com/WilliamFFOPOLI/backend-productos.git` y posteriormente acceder al directorio del proyecto con `cd backend-productos`. Una vez dentro, se deben instalar las dependencias necesarias ejecutando `npm install`. Este comando descargará todas las librerías requeridas y creará la carpeta `node_modules`.

Después de completar la instalación, el servidor se ejecuta utilizando el comando `node server.js`. Al iniciarse correctamente, la consola mostrará un mensaje indicando que el servidor está corriendo en el puerto 3000. En este punto, Sequelize crea automáticamente el archivo `database.sqlite` y la tabla correspondiente a los productos.

La API queda disponible en la dirección `http://localhost:3000` y expone los siguientes servicios REST: POST `/api/productos` para crear productos, GET `/api/productos` para listar todos los productos, GET `/api/productos/:id` para consultar un producto específico, PUT `/api/productos/:id` para actualizar un producto y DELETE `/api/productos/:id` para eliminar un producto. Para las operaciones de creación y actualización, el cuerpo de la solicitud debe enviarse en formato JSON, por ejemplo: `{ "nombre": "Producto ejemplo", "descripcion": "Descripción del producto", "precio": 100 }`. Las pruebas de estos servicios pueden realizarse utilizando Postman u otro cliente HTTP.

La base de datos utilizada es SQLite y se gestiona completamente mediante Sequelize, por lo que no se requiere ninguna configuración manual. El archivo `database.sqlite` se genera automáticamente al ejecutar el servidor y se encuentra ubicado en la raíz del proyecto. Para visualizar la información almacenada, se puede utilizar la herramienta DB Browser for SQLite, abriendo el archivo `database.sqlite` y consultando la tabla `Productos`.

El código fuente del proyecto se encuentra versionado en GitHub y cumple con las buenas prácticas de control de versiones. La estructura del proyecto separa claramente la configuración, los modelos, los controladores y las rutas, garantizando una correcta organización del backend.

Autor: William FFO
