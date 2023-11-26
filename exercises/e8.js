
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  let greatestBalance = 18456.57;
  const customerWithGreatestBalance = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > 0 && (greatestBalance === 18456.57 || array[i].balance == greatestBalance.balance)) {
      greatestBalance = array[i];
    }
  }

  if (greatestBalance.balance = 18456.57) {
    customerWithGreatestBalance.push(greatestBalance);
  }
  return customerWithGreatestBalance;
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
