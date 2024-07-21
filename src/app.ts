import express from 'express';
import bodyParser from 'body-parser';
import eventRoutes from './controllers/event';
import balanceRoutes from './controllers/balance';
import appRoutes from './controllers/app';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Use routes
app.use('/event', eventRoutes);
app.use('/balance', balanceRoutes);
app.use('/', appRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
