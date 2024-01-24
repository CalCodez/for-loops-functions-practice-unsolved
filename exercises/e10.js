// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let letterOne = 'a';
  let letterTwo = 'c';

  const clientsWithLetter = [];
  const clientsWithLetterC = [];


  for (let i = 0; i < array.length; i++)
    for (let letter = 0; letter < array[i].name.length; letter++) {
      if (array[i].name[letter] == letterOne)
        clientsWithLetter.push(array[i].name);
      else (array[i].name[letter] !== letterTwo.toLowerCase())
      //clientsWithLetterC.push(array[i].name);

    }
  return clientsWithLetter;

}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
