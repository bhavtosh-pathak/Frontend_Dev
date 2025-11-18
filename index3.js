
class NegativeAmountError extends Error {
  constructor(message) {
    super(message);
    this.name = "NegativeAmountError";
  }
}

class MissingFieldError extends Error {
  constructor(message) {
    super(message);
    this.name = "MissingFieldError";
  }
}

class NullEntryError extends Error {
  constructor(message) {
    super(message);
    this.name = "NullEntryError";
  }
}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const validTransactions = [];
const invalidTransactions = [];

function processTransactions(transactions) {
  for (let tx of transactions) {

    try {

      
      if (tx === null) {
        throw new NullEntryError("Null transaction encountered!");
      }

      if (!tx.id || tx.amount === undefined) {
        throw new MissingFieldError("Transaction is missing id or amount!");
      }

   
      if (tx.amount < 0) {
        throw new NegativeAmountError("Amount cannot be negative!");
      }

    
      validTransactions.push(tx);

    } catch (error) {

   
      invalidTransactions.push({
        transaction: tx,
        error: error.name,
        message: error.message
      });

    }
  }
}


processTransactions(transactions);


console.log("===== Final Report =====");
console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);
console.log("Successful Count:", validTransactions.length);
console.log("Failed Count:", invalidTransactions.length);
