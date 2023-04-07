/* 
Assignment 1: Function and Array
Complete the function below to find the max number of the passing array of numbers.

Reminder: you can't use built-in Math.max() or sort() to complete this assignment.
*/

function max(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));
