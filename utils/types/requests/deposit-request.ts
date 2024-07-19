import { Implements } from "utils/types/implements";
import { IEventRequest } from "../../interfaces/event-request";

export type depositRequest = Implements<IEventRequest, {
    type: "deposit",
    destination: string,
    amount: number
}>