import express, { Request, Response } from 'express';
import balanceService from '../services/balanceService';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const accountId = req.query.account_id as string;
    if (!accountId) {
        res.status(400).send('Account ID is required');
        return;
    }

    try {
        const balance = await balanceService.getBalance(accountId);
        if (balance === null) {
            res.status(404).send('0');
        } else {
            res.status(200).send(balance.toString());
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

export default router;
