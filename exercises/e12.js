
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

import { bankAccounts } from "../data/data";

export function getAllDepositsGreaterThanOneHundred(array) {
  const cusDepos = [];

  for (let i = 0; i < array.length; i++) {
    const customer = array[i];
    if (customer.deposits && customer.deposits.length > 0) {
      for (let x = 0; x < customer.deposits.length; x++) {
        if (customer.deposits[x] > 100)
          cusDepos.push(customer.deposits[x])
      }
    }

  }
  return cusDepos;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
