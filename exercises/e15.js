
// EXERCISE 15
// Please, read the exercise-info/concat.md to get the initial data of what is the expected result of this exercise.
// concatArrays(['d', 'r', 'a'], ['f', 'y']) => ['d', 'r', 'a', 'f', 'y']
// NOTE: You can NOT use the array.concat() method in your code

export function concatArrays(arr1, arr2) {
  // Your code goes here...
  const arr3 = [];

  for (let i = 0; i < arr1.length; i++)
    for (let x = 0; x < arr2.length; x++) {
      if (arr1[i] >= 1 && arr2[x] >= 3)
        arr3.push(arr1[i++], arr2[x])
    }
  return arr3.sort();
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
