import mongoose from 'mongoose';

export default async function connectDB() {
  const mongoURI = process.env.MONGO_URI;
  try {
    if (!mongoURI) { throw new Error('URI is not defined'); }
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } catch (error) {
    console.log('Error connecting to MongoDB: ', error);
    process.exit(1);
  }
}
