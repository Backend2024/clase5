# Proyecto E-commerce Backend

## Descripción
Este proyecto implementa un servidor backend para un e-commerce utilizando Node.js y Express. El servidor maneja productos y carritos de compras, permitiendo realizar operaciones CRUD sobre ellos.

## Requisitos del Entregable
- El servidor debe correr en el puerto 8080.
- Debe utilizar rutas de Express para manejar los productos (`/api/products`) y carritos (`/api/carts`).
- La persistencia de los datos se maneja a través de archivos JSON en la carpeta `data`.

## Objetivos
- Crear un API que permita la gestión de productos y carritos.
- Implementar la lógica de negocio en clases dedicadas para manejo de productos y carritos.
- Garantizar que el servidor pueda leer y escribir en archivos JSON para mantener el estado de la aplicación.

## Instalación y Ejecución
Para instalar las dependencias del proyecto, ejecute `npm install`. Para iniciar el servidor, ejecute `npm start`.

## Estructura de Archivos  
Proyecto/  
│  
├── src/  
│   ├── app.js  
│   ├── productRoutes.js  
│   ├── cartRoutes.js  
│   └── ProductManager.js # 
│  
├── data/  
│   ├── products.json  
│   └── carts.json  
│  
├── .gitignore  
├── package.json  
├── package-lock.json  
└── README.md  


## Contribuciones
Las instrucciones para contribuir al proyecto.

## Licencia
Información sobre la licencia del proyecto.