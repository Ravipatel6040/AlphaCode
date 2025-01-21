// app.js
import express from 'express';
import connectDB from './connection.js'; // Import MongoDB connection function
import productRouter from './router.js'; // Import your product router
import cors from 'cors'; // Optional: Use CORS middleware if needed

const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies from requests
app.use(express.json());

// Optional: Enable CORS if your frontend is hosted on a different domain or port
app.use(cors());

// Routes
app.use('/products', productRouter); // Use product routes for "/products"

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
