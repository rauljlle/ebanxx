import { Account } from "../account/entity";

class DB {

    private data: Account[];

    constructor(){
        this.data = [];
    }

    insert(account: Account){
        this.data.push(account)
    }

    reset(){
        this.data = []
    }
}