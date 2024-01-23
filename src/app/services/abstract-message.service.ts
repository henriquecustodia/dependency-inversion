import { Observable } from "rxjs";

export abstract class MessageService {
    abstract getMessage(): Observable<string>;
}