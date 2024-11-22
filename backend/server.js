import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: 'https://lost-and-found-mysql-project--zeta.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true, 
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Use routes
app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
