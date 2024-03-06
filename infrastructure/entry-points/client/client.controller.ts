import { Body, Controller, Post } from "@nestjs/common";
import { Client } from "domain/model/client/client.model";
import { CreateClientUseCase } from "domain/use-case/client/create-client.use-case";
import { Observable } from "rxjs";

@Controller("client")
export class ClientController {
  constructor(private readonly createClientUseCase: CreateClientUseCase) {}

  @Post()
  createClient(@Body() client: Client): Observable<Client> {
    return this.createClientUseCase.execute(client);
  }
}