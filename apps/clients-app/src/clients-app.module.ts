import { Module } from '@nestjs/common';
import { ClientsAppService } from './clients-app.service';
import { ClientController } from 'infrastructure/entry-points/client/client.controller';
import { ClientServiceMongo } from 'infrastructure/driven-adapters/client/client.mongo';
import { CreateClientUseCase } from 'domain/use-case/client/create-client.use-case';
import { ClientRepository } from 'domain/model/client/gateway/client.repository';

@Module({
  imports: [],
  controllers: [ClientController],
  providers: [
    {
      provide: CreateClientUseCase,
      useFactory: (clientServiceMongo: ClientServiceMongo) =>
        new CreateClientUseCase(clientServiceMongo),
      inject: [ClientServiceMongo],
    },
  ],
})
export class ClientsAppModule {}
