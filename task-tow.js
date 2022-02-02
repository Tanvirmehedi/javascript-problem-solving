// find the smallest number to the Array

function smallestNumber(numbers) {
  let result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (result > numbers[i]) {
      result = element;
    }
  }
  return result;
}

const num = [20, 45, 63, 90, 12, 32, 11, 0];
const num2 = [-20, -45, -63, -90, -12, -32, -11, 0];

console.log("Lowest ", smallestNumber(num));
console.log("Lowest ", smallestNumber(num2));

// Largest Number

function findLargest(numbers) {
  let result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (result < numbers[i]) {
      result = element;
    }
  }
  return result;
}
// findLargest(num);
console.log("Largest ", findLargest(num));
console.log("Largest ", findLargest(num2));

// Fibonacci

function fibonacciSeries(n) {
  if (typeof n != "number") {
    return "Please Input A number ";
  } else if (n <= 2) {
    return "Please Input A number Which Grater then 2 ";
  }
  const fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo;
}

console.log(fibonacciSeries(20));

console.log(Math.floor(12.96));
