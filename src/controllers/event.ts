import express, { Request, Response } from 'express';
import eventService from '../services/eventService';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const eventResponse = await eventService.post(req.body);
        res.status(201).json(eventResponse);
    } catch (error) {
        res.status(404).send('0');
    }
});

export default router;
