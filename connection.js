// connection.js
import mongoose from 'mongoose';

const DB_URI = 'mongodb://localhost:27017/yourdbname';

const connectDB = () => {
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });
};

export default connectDB;
