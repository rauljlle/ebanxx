import axios from 'axios';

class BalanceService {
    async getBalance(accountId: string): Promise<number | null> {
        const apiUrl = process.env.API_URL;
        if (!apiUrl) {
            throw new Error('define API_URL in .env');
        }
        
        try {
            const response = await axios.get(`${apiUrl}/balance`, {
                params: { account_id: accountId }
            });
            return response.data;
        } catch (error) {
            return null;
        }
    }
}

export default new BalanceService();
