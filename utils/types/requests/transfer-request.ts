import { Implements } from "utils/types/implements";
import { IEventRequest } from "../../interfaces/event-request";

export type transferRequest = Implements<IEventRequest, {
    type: "transfer",
    origin: string,
    destination: string,
    amount: number
}>