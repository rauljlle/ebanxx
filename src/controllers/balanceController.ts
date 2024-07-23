import express, { Request, Response } from 'express';
import accountService from '../account/service'

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const accountId = req.query.account_id as string;
    if (!accountId) {
        res.status(400).send('Verify Account ID');
        return;
    }

    try {
        const balance = accountService.balanceHandler(accountId);
        
        res.status(200).send(balance.toString());
    } catch (error) {
        res.status(404).send('0');
    }
});

export default router;
