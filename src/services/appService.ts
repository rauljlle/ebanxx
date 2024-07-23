import { Response } from 'express';
import { DB } from '../utils/mockDB';

class AppService {

    #db = DB.instance;

    getRoot(): string {
        return 'Hire me ;)';
    }

    postReset(res: Response): void {
        this.#db.reset();
        res.status(200);
    }
}

export default new AppService();
