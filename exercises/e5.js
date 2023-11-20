
// EXERCISE 5
// Return an array of all bank account holders names
// Array example: bankAccounts in /data/data.js
// getAllClientNames(bankAccounts) => ['Kevin', 'Spenser']


import { bankAccounts } from "../data/data";
export function getAllClientNames(array) {
  for (var i = 0; i < bankAccounts.length; i++) {
    return [bankAccounts[i].name, bankAccounts[1].name, bankAccounts[2].name, bankAccounts[3].name, bankAccounts[4].name];
  }
  array1.push(bankAccounts[i].name);



};

const array1 = [];







// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
