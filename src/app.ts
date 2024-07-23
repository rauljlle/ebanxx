import express from 'express';
import bodyParser from 'body-parser';
import eventRoutes from './account/controllers/eventController';
import balanceRoutes from './account/controllers/balanceController';
import appRoutes from './app/appController';

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
