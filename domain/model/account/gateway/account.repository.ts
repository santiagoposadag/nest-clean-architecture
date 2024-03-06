import { Observable } from "rxjs";
import { AccountModel } from "../account.model";

export interface AccountRepository{
    createAccount(account:AccountModel):Observable<AccountModel>;
}