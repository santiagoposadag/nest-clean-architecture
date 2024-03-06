import { Observable } from "rxjs";
import { Client } from "../client.model";

export interface ClientRepository {
    saveClient(client: Client): Observable<Client>;
    getAllClients(): Observable<Client>; 
}