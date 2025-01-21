import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Product name is required'], 
        minlength: [3, 'Product name must be at least 3 characters long'],
    },
    description: { 
        type: String, 
        maxlength: [500, 'Description cannot exceed 500 characters'] 
    },
    price: { 
        type: Number, 
        required: [true, 'Price is required'], 
        min: [0, 'Price must be a positive number'], // Ensures price is greater than or equal to 0
    },
    stock: { 
        type: Number, 
        required: [true, 'Stock is required'], 
        min: [0, 'Stock cannot be negative'], // Ensures stock is greater than or equal to 0
    },
    created_at: { 
        type: Date, 
        default: Date.now 
    },
    updated_at: { 
        type: Date, 
        default: Date.now 
    },
});

// Custom validation to ensure updated_at is always after created_at
productSchema.pre('save', function (next) {
    if (this.updated_at < this.created_at) {
        next(new Error('Updated date cannot be before created date'));
    } else {
        next();
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
