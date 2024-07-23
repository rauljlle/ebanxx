export class Account {

    #id: string;
    #balance: number;

    constructor(id: string, balance: number){
        this.#id = id;
        this.#balance = balance;
    }

    getId(): string {
        return this.#id;
    }

    getBalance(): number {
        return this.#balance;
    }

    deposit(amount: number){
        this.#balance += amount;
    }

    withdraw(amount: number){
        this.#balance -= amount;
    }

}