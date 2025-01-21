
import { getAllProducts } from './controller.js';
// router.js
import express from 'express';
// import Product from './models/productModel.js'; // Assuming Product model is imported

const router = express.Router();

// Fetch products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products from the database
        if (products.length === 0) {
            return res.status(200).json({ message: 'No products found' }); // Optional: Return a message if no data found
        }
        res.status(200).json(products); // Send products as response
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
