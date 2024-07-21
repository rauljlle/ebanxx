import axios from 'axios';
import { Request, Response } from 'express';

class AppService {
    getRoot(): string {
        return 'Hire me ;)';
    }

    async postReset(res: Response): Promise<void> {
        try {
            const apiUrl = process.env.API_URL;
            if (!apiUrl) {
                throw new Error('define API_URL in .env');
            }

            const apiResponse = await axios.post(`${apiUrl}/reset`);
            res.status(apiResponse.status).send(apiResponse.data);
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                res.status(error.response.status).send(error.response.data);
            } else {
                res.status(500).send('Internal Server Error');
            }
        }
    }
}

export default new AppService();
