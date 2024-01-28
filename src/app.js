const express = require('express');
const app = express();
const productRoutes = require('./src/productRoutes'); // Asegúrate de que las rutas se refieran correctamente al directorio src
const cartRoutes = require('./src/cartRoutes'); // Asegúrate de que las rutas se refieran correctamente al directorio src

// Middleware para parsear el cuerpo de las peticiones en formato JSON
app.use(express.json());

// Rutas para productos
app.use('/api/products', productRoutes);

// Rutas para carritos
app.use('/api/carts', cartRoutes);

// Iniciar el servidor en el puerto 8080
app.listen(8080, () => {
    console.log("Servidor escuchando en el puerto 8080");
});