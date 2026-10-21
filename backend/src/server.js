import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import authRoute from './routes/authRoute.js';

const app = express();

app.use(express.json());
app.use("/api/auth", authRoute);
const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI_LOCAL);
    console.log('Databse connected');
  } catch (error) {
    console.error('Datbase connection error: ', error.message);
  }
};

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});