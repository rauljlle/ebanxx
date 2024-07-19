import { Implements } from "utils/types/implements";
import { IEventRequest } from "../../interfaces/event-request";

export type withdrawRequest = Implements<IEventRequest, {
    type: "withdraw",
    origin: string,
    amount: number
}>