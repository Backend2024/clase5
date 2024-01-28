const express = require('express');
const router = express.Router();
const CartManager = require('./CartManager'); // Debes crear esta clase
const cartManager = new CartManager('./data/carts.json');

router.post('/', async (req, res) => {
    try {
        const cart = await cartManager.createCart();
        res.status(201).json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:cid', async (req, res) => {
    try {
        const cart = await cartManager.getCartById(req.params.cid);
        res.json(cart);
    } catch (err) {
        res.status(404).json({ error: 'Carrito no encontrado' });
    }
});

router.post('/:cid/products', async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const updatedCart = await cartManager.addProductToCart(req.params.cid, productId, quantity);
        res.status(201).json(updatedCart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:cid/products/:pid', async (req, res) => {
    try {
        await cartManager.removeProductFromCart(req.params.cid, req.params.pid);
        res.status(200).json({ message: 'Producto eliminado del carrito' });
    } catch (err) {
        res.status(500).json({ error: 'No se pudo eliminar el producto del carrito' });
    }
});

module.exports = router;