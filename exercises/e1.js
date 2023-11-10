
// EXERCISE 1
// Return an array of numbers in 1..10
// getFirstTenNumbers() => [1, 2, 3, ... , 10]

// Your code goes here...


export function getFirstTenNumbers(arr1, arr2) {
  var array1 = [1, 2, 3, 4, 5];
  var array2 = [6, 7, 8, 9, 10];
  var array3 = array1.concat(array2);
  for (var i = 0; i < array1.length; i++);
  return (array3);
}
getFirstTenNumbers();


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
