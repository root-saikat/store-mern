import express from 'express';
import connectToMongo from './db.js';
import authRouter from './routes/auth.js'
import categoryRoutes from './routes/categoryRoute.js'
import brandRoutes from './routes/brandRoute.js'
import productRoutes from './routes/productRoute.js'
import cors from 'cors';
import dotenv from 'dotenv';

//configure dotenv 
dotenv.config({path: './backend/.env'});

// Connect to MongoDB
connectToMongo();

const app = express();
const port = process.env.PORT;


// Middleware for parsing JSON
app.use(express.json());

// Enable CORS for a specific origin (e.g., http://localhost:3000)
app.use(cors({ origin: 'http://localhost:3000' }));


// Available routes
app.use('/api/auth', authRouter); 
app.use('/api/category', categoryRoutes); 
app.use('/api/brand', brandRoutes); 
app.use('/api/product', productRoutes); 


app.listen(port, () => {
    console.log(`store backend app listening at http://localhost:${port}`);
});