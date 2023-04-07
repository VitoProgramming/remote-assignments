/*
Assignment 2: Function and Object
Complete the function below to calculate the result of the passing object.
*/

function calculate(args) {
  // your code here
  const num1 = args.n1;
  const num2 = args.n2;
  const operator = args.op;
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return "Not supported";
  }
}

console.log(calculate({ n1: 2, n2: 3, op: "+" })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: "-" })); // expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: "x" })); // expected output: 'Not supported'
