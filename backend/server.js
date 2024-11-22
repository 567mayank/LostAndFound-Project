import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
