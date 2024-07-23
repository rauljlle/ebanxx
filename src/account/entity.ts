import { DB } from "../utils/mockDB";

export class Account {

    #id: string;
    #balance: number;
    static #db = DB.instance;

    constructor(id: string, balance: number){
        this.#id = id;
        this.#balance = balance;
        Account.#db.insert(this);
    }

    public static getById(id: string): Account | undefined {
        return Account.#db.findById(id);
    }

    private addBalance(amount: number){
        this.#balance += amount;
    }

    private removeBalance(amount: number){
        this.#balance -= amount;
    }

    private transferBalance(destinationId: string, amount:number){
        let destination = Account.getById(destinationId);

        // If it doesnt exist, creates it with an amount of zero
        // so the rest of the code doesn't have to change
        if (!destination) destination = new Account(destinationId, 0);

        this.addBalance(amount);
        destination.removeBalance(amount);
    }

    getId(): string {
        return this.#id;
    }

    getBalance(): number {
        return this.#balance;
    }

}