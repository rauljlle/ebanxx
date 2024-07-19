import express, { Request, Response } from 'express';
import appService from './services/appService';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send(appService.getRoot());
});

export default router;
