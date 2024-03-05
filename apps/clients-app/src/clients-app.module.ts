import { Module } from '@nestjs/common';
import { ClientsAppController } from './clients-app.controller';
import { ClientsAppService } from './clients-app.service';

@Module({
  imports: [],
  controllers: [ClientsAppController],
  providers: [ClientsAppService],
})
export class ClientsAppModule {}
