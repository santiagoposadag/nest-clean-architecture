import { Controller, Get } from '@nestjs/common';
import { ClientsAppService } from './clients-app.service';

@Controller()
export class ClientsAppController {
  constructor(private readonly clientsAppService: ClientsAppService) {}

  @Get()
  getHello(): string {
    return this.clientsAppService.getHello();
  }
}
