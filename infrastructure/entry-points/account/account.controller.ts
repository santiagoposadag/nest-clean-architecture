import { Body, Controller, Post } from "@nestjs/common";
import { AccountModel } from "domain/model/account/account.model";
import { CreateAccountUseCase } from "domain/use-case/account/create-account.use-case";
import { Observable } from "rxjs";

@Controller("account")
export class AccountController {
  constructor(private readonly createAccountUseCase: CreateAccountUseCase) {}

  @Post()
  createClient(@Body() account: AccountModel): Observable<AccountModel> {
    return this.createAccountUseCase.execute(account);
  }
}