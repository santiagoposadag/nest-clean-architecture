import { Module } from '@nestjs/common';
import { CreateAccountUseCase } from 'domain/use-case/account/create-account.use-case';
import { AccountServiceMongo } from 'infrastructure/driven-adapters/account/account.mongo';
import { AccountController } from 'infrastructure/entry-points/account/account.controller';

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [
    AccountServiceMongo,
    {
      provide: CreateAccountUseCase,
      useFactory: (accountServiceMonog: AccountServiceMongo) => new CreateAccountUseCase(accountServiceMonog),
      inject: [AccountServiceMongo]
    }
  ],
})
export class AppModule { }
