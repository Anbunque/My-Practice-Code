const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Add Product
router.post('/add', async (req, res) => {
    const { farmerId, name, quantity, price } = req.body;

    const product = new Product({
        farmerId,
        name,
        quantity,
        price,
    });

    try {
        const savedProduct = await product.save();
        res.send(savedProduct);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Get All Products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
