import axios from 'axios';

interface IEventRequest {
    type: string;
    origin?: string;
    destination?: string;
    amount: number;
}

interface IEventResponse {
    origin?: { id: string; balance: number };
    destination?: { id: string; balance: number };
}

class EventService {
    async post(eventRequest: IEventRequest): Promise<IEventResponse> {
        const apiUrl = process.env.API_URL;
        if (!apiUrl) {
            throw new Error('define API_URL in .env');
        }
        
        const response = await axios.post(`${apiUrl}/event`, eventRequest);
        return response.data;
    }
}

export default new EventService();
