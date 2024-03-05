import { Test, TestingModule } from '@nestjs/testing';
import { ClientsAppController } from './clients-app.controller';
import { ClientsAppService } from './clients-app.service';

describe('ClientsAppController', () => {
  let clientsAppController: ClientsAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClientsAppController],
      providers: [ClientsAppService],
    }).compile();

    clientsAppController = app.get<ClientsAppController>(ClientsAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(clientsAppController.getHello()).toBe('Hello World!');
    });
  });
});
