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
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    const { title, description, price, thumbnail, code, stock } = req.body;
    
    if (!title || !description || price === undefined || !thumbnail || !code || stock === undefined) {
        return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }
    
    try {
        const product = await productManager.addProduct(title, description, price, thumbnail, code, stock);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:pid', async (req, res) => {
    try {
        const updatedProduct = await productManager.updateProduct(parseInt(req.params.pid), req.body);
        if (updatedProduct) {
            res.json(updatedProduct);
        } else {
            res.status(404).json({ error: 'Producto no encontrado para actualizar' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:pid', async (req, res) => {
    try {
        const success = await productManager.deleteProduct(parseInt(req.params.pid));
        if (success) {
            res.status(200).json({ message: 'Producto eliminado' });
        } else {
            res.status(404).json({ error: 'Producto no encontrado para eliminar' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;