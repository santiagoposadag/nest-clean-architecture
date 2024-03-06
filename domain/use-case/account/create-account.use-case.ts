import { AccountModel } from "domain/model/account/account.model";
import { AccountRepository } from "domain/model/account/gateway/account.repository";
import { Observable } from "rxjs";

export class CreateAccountUseCase{
    
    constructor(private readonly accountRepo:AccountRepository){

    }

    execute(account:AccountModel):Observable<AccountModel>{
        return this.accountRepo.createAccount(account);
    }
}