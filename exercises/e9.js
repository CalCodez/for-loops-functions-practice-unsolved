
// EXERCISE 9
// Return an array of bank accounts with balance over $100
// Array example: bankAccounts in /data/data.js
// getClientsWithBalanceOverOneHundred(array) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithBalanceOverOneHundred(array) {
  let lowestAllowBalance = 100;
  let higestAllowBalance = 18456.57;
  let clientLowHight = [higestAllowBalance, lowestAllowBalance];
  const clientsOverOneHundred = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > 0 && (lowestAllowBalance.balance == 100 && higestAllowBalance.balance == 18456.57 || array[i].balance >= lowestAllowBalance.balance && higestAllowBalance.balance)) {
      clientLowHight.blance = array[i];
    }
    if (lowestAllowBalance.balance > 100 && higestAllowBalance.balance == 18456.57);
    clientsOverOneHundred.push(clientLowHight[i]);
  }
  return clientsOverOneHundred;

}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
