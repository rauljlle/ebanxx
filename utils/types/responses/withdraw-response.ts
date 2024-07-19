import { Implements } from "utils/types/implements";
import { accountInfo } from "../account-info";
import { IEventResponse } from "../../interfaces/event-response";

export type withdrawResponse = Implements<IEventResponse, {
    origin: accountInfo
}>