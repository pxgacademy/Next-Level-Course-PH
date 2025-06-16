{
  // GETTER and SETTER

  class BankAccount {
    public readonly id: number; // only can read access from anywhere
    public name: string; // can access from anywhere
    private _oldBalance: number; // only can access into this class
    protected _balance: number; // only can access into this class and child class

    constructor(id: number, name: string, balance: number, oldBalance: number) {
      this.id = id;
      this.name = name;
      this._oldBalance = oldBalance;
      this._balance = balance;
    }

    /*
    oldBalance(): number {
        return this._oldBalance;
    }
    */

    // getter
    get oldBalance() {
      return this._oldBalance;
    }

    /*
    addDeposit(amount: number): number {
      this._oldBalance = this._balance;
      this._balance = this._balance + amount;
      return this._balance;
    }
    */

    // setter
    set addDeposit(amount: number) {
      this._oldBalance = this._balance;
      this._balance = this._balance + amount;
    }

    withdraw(amount: number): number {
      this._oldBalance = this._balance;
      this._balance = this._balance - amount;
      return this._balance;
    }
  }

  const account1 = new BankAccount(123, "Person1", 100000, 100000);
  account1.addDeposit = 5000;
  console.log(account1.oldBalance);
}
