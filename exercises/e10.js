// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let hasAccount = true;
  let letterOne = 'a';
  let letterTwo = 'c';
  const nameToSort = [];
  const clientsWithLetter = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] = hasAccount) return nameToSort.push(array[i].name)
  }

  for (let l = 0; l < nameToSort.length; l++) {
    if (nameToSort[l] == letterOne || nameToSort[l] == letterTwo)
      clientsWithLetter.push(nameToSort[l]);
  }
  return clientsWithLetter;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
