import mongoose from 'mongoose';

const mongoUsername = 'root';
const mongoPassword = 'root';

export const connectToMongo = async () => {
    mongoose.connect(`mongodb://${mongoUsername}:${mongoPassword}@mongo:27017/hw4_db?authSource=admin`)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Could not connect to MongoDB', error));
}