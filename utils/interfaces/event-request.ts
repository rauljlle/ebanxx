import { transaction } from "utils/types/transaction";

export interface IEventRequest {
    type: transaction,
    destination?: string,
    origin?: string,
    amount: number
}