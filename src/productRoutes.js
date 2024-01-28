const express = require('express');
const router = express.Router();
const ProductManager = require('./ProductManager');
const productManager = new ProductManager('./data/products.json');

router.get('/', async (req, res) => {
    try {
        let products = await productManager.getProducts();
        if (req.query.limit) {
            products = products.slice(0, parseInt(req.query.limit));
        }
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:pid', async (req, res) => {
    try {
        const product = await productManager.getProductById(parseInt(req.params.pid));
        res.json(product);
    } catch (err) {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

router.post('/', async (req, res) => {
    try {
        const product = await productManager.addProduct(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:pid', async (req, res) => {
    try {
        const updatedProduct = await productManager.updateProduct(parseInt(req.params.pid), req.body);
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: 'No se pudo actualizar el producto' });
    }
});

router.delete('/:pid', async (req, res) => {
    try {
        await productManager.deleteProduct(parseInt(req.params.pid));
        res.status(200).json({ message: 'Producto eliminado' });
    } catch (err) {
        res.status(500).json({ error: 'No se pudo eliminar el producto' });
    }
});

module.exports = router;