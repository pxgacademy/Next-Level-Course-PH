{
  // ACCESS MODIFIERS
  // public / private / protected

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

    addDeposit(amount: number): number {
      this._oldBalance = this._balance;
      this._balance = this._balance + amount;
      return this._balance;
    }

    withdraw(amount: number): number {
      this._oldBalance = this._balance;
      this._balance = this._balance - amount;
      return this._balance;
    }

    oldBalance(): number {
      return this._oldBalance;
    }
  }

  class StudentAccount extends BankAccount {
    private rate: number;
    constructor(id: number, name: string, balance: number, rate: number) {
      super(id, name, balance, balance);
      this.rate = rate;
    }

    addFee(): number | string {
      if (this.rate <= 0.05) return this._balance * this.rate;
      return "Enter a valid amount";
    }
  }

  const account1 = new BankAccount(123, "Person1", 100000, 0);

  account1.addDeposit(1000);
  account1.withdraw(2000);
  account1.oldBalance();

  const studentAccount = new StudentAccount(133, "Person1", 100000, 0.06);
  studentAccount.oldBalance();
}
