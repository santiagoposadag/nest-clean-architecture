import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
