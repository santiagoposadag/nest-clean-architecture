import { Injectable } from "@nestjs/common";
import { Client } from "domain/model/client/client.model";
import { ClientRepository } from "domain/model/client/gateway/client.repository";
import { Observable, of } from "rxjs";

@Injectable()
export class ClientServiceMongo implements ClientRepository {
    saveClient(client: Client): Observable<Client> {
        console.log('Intentando crear client');

        return of(client);
        
    }
    getAllClients(): Observable<Client> {
        throw new Error("Method not implemented.");
    }
  
}