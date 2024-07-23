import { IAccount } from "./interface";

class Account implements IAccount{

    id: string;
    balance: number;

    constructor(id: string, balance: number){
        this.id = id;
        this.balance = balance;
    }


    add(amount: number){
        this.balance += amount;
    }

    remove(amount: number){
        this.balance -= amount;
    }

}