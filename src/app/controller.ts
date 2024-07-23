import express, { Request, Response } from 'express';
import appService from './service';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send(appService.getRoot());
});

router.post('/reset', async (req: Request, res: Response) => {
    appService.postReset();
    res.sendStatus(200);
});

export default router;
