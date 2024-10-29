import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    depositPlus = (valor: number): void => {
        this.balance = this.balance + valor + 10
    }

}