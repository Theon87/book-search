import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || '';
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks'); // This was the previous code.

const db = async (): Promise<typeof mongoose.connection> => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Database connected');
        return mongoose.connection;
    } catch (error) {
        console.log('Error connecting to database', error);
        throw new Error('Error connecting to database');
    }
};

// export default mongoose.connection; // This was the previous code.
export default db;
