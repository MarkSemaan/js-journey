class BankAccount {
    constructor(ownerName, initialBalance) {
      console.log("Creating a new account for " + ownerName);
      this.ownerName = ownerName;
      this.balance = initialBalance;
      this.history = [];
    }

    deposit(amount) {
      if (amount > 0) {
        this.balance = this.balance + amount;
        console.log(this.ownerName + ": Deposited $" + amount + ". New balance is $" + this.balance);
        this.history.push("Deposited $" + amount);
      } else {
        console.log(this.ownerName + ": Cannot deposit zero or a negative amount.");
      }
    }
    withdraw(amount) {
      if (amount <= 0) {
        console.log(this.ownerName + ": Cannot withdraw zero or a negative amount.");
        return;
      }
      if (amount <= this.balance) {
        this.balance = this.balance - amount; 
        console.log(this.ownerName + ": Withdrew $" + amount + ". New balance is $" + this.balance);
        this.history.push("Withdrew $" + amount);

      } else {
        console.log(
          this.ownerName + ": Insufficient funds. Tried to withdraw $" + amount +
          ", but balance is only $" + this.balance
        );
      }
    }

    transferTo(anotherAccount, amount) {
      console.log(
          "\nAttempting to transfer $" + amount +
          " from " + this.ownerName +
          " to " + anotherAccount.ownerName + "..."
      );

       if (amount <= 0) {
        console.log("Transfer amount must be positive.");
      }

      if (amount <= this.balance) {
        this.balance = this.balance - amount;
        anotherAccount.balance = anotherAccount.balance + amount;

        console.log("Transfer successful!");

        this.history.push("Transferred $" + amount + " to " + anotherAccount.ownerName);

        anotherAccount.history.push("Received $" + amount + " from " + this.ownerName);

        console.log(this.getSummary());
        console.log(anotherAccount.getSummary());

      } else {
        console.log(
          "Transfer failed. Insufficient funds for " + this.ownerName +
          ". Balance is $" + this.balance + ", but tried to transfer $" + amount
        );
      }
    }

    getSummary() {

      const summaryString = this.ownerName + "'s balance is $" + this.balance;
      return summaryString; 
    }

    printHistory() {
      console.log("\n--- Transaction History for " + this.ownerName + " ---");

      if (this.history.length === 0) {
          console.log("No transactions recorded yet.");
      } else {
          for (let i = 0; i < this.history.length; i++) {
              const transaction = this.history[i];
              console.log("- " + transaction);
          }
      }
      console.log("------------------------------------\n");
    }

  } 

  console.log("--- Starting Bank Example ---");

  const acc1 = new BankAccount("John", 500);

  const acc2 = new BankAccount("Sara", 300);

  console.log( acc1.getSummary() ); 
  console.log( acc2.getSummary() ); 


  acc1.transferTo(acc2, 200);

  acc1.deposit(50);
  acc2.withdraw(100);
  acc1.withdraw(500);

  acc1.printHistory();
  acc2.printHistory();

  console.log("--- Bank Example Finished ---");