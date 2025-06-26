"use strict";
{
    // ACCESS MODIFIERS
    // public / private / protected
    class BankAccount {
        constructor(id, name, balance, oldBalance) {
            this.id = id;
            this.name = name;
            this._oldBalance = oldBalance;
            this._balance = balance;
        }
        addDeposit(amount) {
            this._oldBalance = this._balance;
            this._balance = this._balance + amount;
            return this._balance;
        }
        withdraw(amount) {
            this._oldBalance = this._balance;
            this._balance = this._balance - amount;
            return this._balance;
        }
        oldBalance() {
            return this._oldBalance;
        }
    }
    class StudentAccount extends BankAccount {
        constructor(id, name, balance, rate) {
            super(id, name, balance, balance);
            this.rate = rate;
        }
        addFee() {
            if (this.rate <= 0.05)
                return this._balance * this.rate;
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
