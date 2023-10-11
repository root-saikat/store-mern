import express from 'express';
import connectToMongo from './db.js';
import authRouter from './routes/auth.js'
import cors from 'cors';


// Connect to MongoDB
connectToMongo();

const app = express();
const port = 5000;

// Middleware for parsing JSON
app.use(express.json());

// Enable CORS for a specific origin (e.g., http://localhost:3000)
app.use(cors({ origin: 'http://localhost:3000' }));


// Available routes
app.use('/api/auth', authRouter); // Use the imported 'authRouter' here


app.listen(port, () => {
    console.log(`store backend app listening at http://localhost:${port}`);
});