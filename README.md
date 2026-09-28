Preentrega 1 - Talento Tech
---------------------------

Proyecto realizado para la primera preentrega de Talento Tech.
La aplicación funciona desde la consola y permite realizar operaciones sobre productos utilizando la Fake Store API.

Tecnologías:
JavaScript
Node.js
Fetch API
Fake Store API

Cómo ejecutar el proyecto
-------------------------
Es necesario tener instalado Node.js.

Desde la terminal, ejecutar:
node index.js

La aplicación recibe los comandos mediante argumentos.

Comandos disponibles
--------------------
- GET - Obtener productos

Para obtener todos los productos:
node index.js GET products

Para obtener un producto específico:
node index.js GET products/1

- POST - Crear un producto
node index.js POST products "Producto de prueba" 1500 "Categoría"

El comando recibe:
Nombre del producto
Precio
Categoría

Ejemplo:
node index.js POST products "Notebook" 250000 "Tecnología"

- DELETE - Eliminar un producto
node index.js DELETE products/1

El número corresponde al ID del producto.
