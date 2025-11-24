class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance)
      throw new Error(" Insufficient balance!");
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();

try {
  acc.deposit(1000);
  console.log("Balance =", acc.getBalance());
  acc.withdraw(2000);
} catch (err) {
  console.log(err.message);
}
