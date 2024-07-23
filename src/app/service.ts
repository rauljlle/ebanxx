import { DB } from '../utils/mockDB';

class AppService {

    private db = DB.instance;

    getRoot(): string {
        return 'Hire me ;)';
    }

    postReset(): void {
        this.db.reset();
    }
}

export default new AppService();
