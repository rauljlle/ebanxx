import express from 'express';
import bodyParser from 'body-parser';
import appController from './controllers/app';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/', appController);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
