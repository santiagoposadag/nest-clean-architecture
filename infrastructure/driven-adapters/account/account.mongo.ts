import { AccountModel } from "domain/model/account/account.model";
import { AccountRepository } from "domain/model/account/gateway/account.repository";
import { Observable, of } from "rxjs";

export class AccountServiceMongo implements AccountRepository {
    createAccount(account: AccountModel): Observable<AccountModel> {
        console.log("Creating the account");
        return of(account);
    }
}