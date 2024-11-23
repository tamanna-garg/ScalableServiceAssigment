const Order = require('../models/orderModel');
const axios = require('axios');

// Create Order
exports.createOrder = async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        // Fetch product details from Product Service
        const productResponse = await axios.get(`${process.env.PRODUCT_SERVICE_URL}/api/products/${productId}`);
        const product = productResponse.data;

        if (product.stock < quantity) {
            return res.status(400).json({ message: 'Insufficient stock' });
        }

        // Create Order
        const order = await Order.create({ productId, quantity });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};