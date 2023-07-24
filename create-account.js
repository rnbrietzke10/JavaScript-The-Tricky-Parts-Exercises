function createAccount(pin, amount = 0) {
  return {
    checkBalance(enteredPin) {
      if (enteredPin === pin) return `$${amount}`;
      return 'Invalid PIN.';
    },
    deposit(enteredPin, depositAmt) {
      if (enteredPin === pin) {
        amount += depositAmt;
        return `Succesfully deposited $${depositAmt}. Current balance: $${amount}.`;
      }
      return 'Invalid PIN.';
    },
    withdraw(enteredPin, withdrawAmt) {
      if (enteredPin === pin) {
        if (withdrawAmt > amount) {
          return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
        }
        amount -= withdrawAmt;
        return `Succesfully withdrew $${withdrawAmt}. Current balance: $${amount}.`;
      }

      return 'Invalid PIN.';
    },
    changePin(oldPin, newPin) {
      if (oldPin === pin) {
        pin = newPin;
        return 'PIN successfully changed!';
      }
      return 'Invalid PIN.';
    },
  };
}

module.exports = { createAccount };
