export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getStatus = (): boolean => {
    return this.status
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor:number): void => {
    this.balance = this.balance + valor;
  }

  withdraw = (valor:number): void => {
    if(this.status && this.balance >= valor){
      this.balance = this.balance - valor
    } else {
      console.log('Sem saldo suficiente para o saque')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
