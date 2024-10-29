import { CompanyAccount } from './class/CompanyAccount'
import { NewAccount } from './class/new-account'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(10)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(20)
console.log(companyAccount)

const newAccount: NewAccount = new NewAccount('teste', 30)
newAccount.depositPlus(100)
newAccount.deposit(50)
newAccount.withdraw(200)
console.log(newAccount)