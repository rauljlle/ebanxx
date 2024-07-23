import { DB } from "../utils/mockDB";

export class Account {

    #id: string;
    #balance: number;
    #db = DB.instance;

    constructor(id: string, balance: number){
        this.#id = id;
        this.#balance = balance;
        this.#db.insert(this);
    }

    addBalance(amount: number){
        this.#balance += amount;
    }

    removeBalance(amount: number){
        this.#balance -= amount;
    }

    getId(): string {
        return this.#id;
    }

    getBalance(): number {
        return this.#balance;
    }

}