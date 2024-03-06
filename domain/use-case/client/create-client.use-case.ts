import { Client } from "domain/model/client/client.model";
import { ClientRepository } from "domain/model/client/gateway/client.repository";
import { Observable } from "rxjs";

export class CreateClientUseCase {
    constructor(private readonly clientRepository: ClientRepository) {}
    
    execute(client: Client): Observable<Client> {
        return this.clientRepository.saveClient(client);
    }
}