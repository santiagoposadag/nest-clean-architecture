import { Module } from '@nestjs/common';
import { ClientController } from 'infrastructure/entry-points/client/client.controller';
import { ClientServiceMongo } from 'infrastructure/driven-adapters/client/client.mongo';
import { CreateClientUseCase } from 'domain/use-case/client/create-client.use-case';

@Module({
  imports: [],
  controllers: [ClientController],
  providers: [
    ClientServiceMongo,
    {
      provide: CreateClientUseCase,
      useFactory: (clientServiceMongo: ClientServiceMongo) =>
        new CreateClientUseCase(clientServiceMongo),
      inject: [ClientServiceMongo],
    },
  ],
})
export class ClientsAppModule {}
