// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let letterOne = 'a';
  let letterTwo = 'C';

  const clientsWithLetter = [[], []];


  for (let i = 0; i < array.length; i++)
    for (let x = 0; x < array[i].name.length; x++)
      if (array[i].name[x] == letterOne) {
        clientsWithLetter[0].push(array[i].name);
      } else (array[i].name[x] === letterTwo)
  clientsWithLetter[1].push(array[i].name);




  return clientsWithLetter;







}











// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
