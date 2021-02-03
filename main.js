class BankAccount{
  constructor (accountNumber, owner) {

    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }//end contructor
   
   balance(){
      let sum = 0;
      for(let i=0; i < this.transactions.length; i++) {
          sum += this.transactions[i].amount;
      }
      return sum;
   }

   charge(payee, amt ){
     let currentBalance =this.balance();
     if(amt <= currentBalance){
          let chargeTransaction =new Transaction(-amt, payee);
          this.transactions.push(chargeTransaction);
     }
   }

   deposit(amt){
      if(amt > 0){
          return;
      }
      let depositTransaction = new Transaction(amt, 'deposit');
      this.transactions.push(depositTransaction);
   }

}//end class

class Transaction {
    constructor(amount, payee){
      this.ammount = amount;
      this.payee  = payee;
      this.date = new Date();
    }
}

class SavingsAccount extends BankAccout {

  constructor(accountNumber, owner,interestRate){
      super(accountNumber, owner);
      this.interestRate = interestRate;
  }
}

const accrueInterest = () => {
  let currentBalance = this.balance();
  let interestAmt = currentBalance * this.interestRate;
  let interestTransaction = new Transaction(interestAmt, "Interest");
  this.transaction.push(interestTransaction);
}



// newDeposit = deposit(100);
// myAccount = new BankAccount('122345', 'Brandon');

//  console.log(myAccount)

// class Transation {
//   constructor(date){
//     this.date = new Date();
//   }

// }

// transact = new Transaction;
// console.log(transact.date)


// date: 01/01/2020
// amount: 10.00
// payee: heb

// let d = new Date()


/********************Test******************* */

if (typeof describe === 'function') {
 const assert = require('assert');
}

/******************* */
// describe('#towersOfHanoi()', () => {
//     it('should be able to move a block', () => {
//       towersOfHanoi('a', 'b');
//       assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
//     });
//   });

  describe("#testing account creation", function(){
    it('should create a new account correctly', function(){
          let acct1  = new BankAccount('122345', 'Brandon');
          assert.equal(acct1.owner, 'Brandon');
          assert.equal(acct1.accountNumber, '122345');
          assert.equal(acct1.transactions.length, 0);
    });
  });
  