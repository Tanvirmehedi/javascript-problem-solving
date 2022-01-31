function numta(number) {
  console.log(number + " ghorer namta");
  for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(number + " X " + i + " = " + result);
  }
  return;
}

numta(39);

// Factorial

function getFactorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }

  return factorial;
}
console.log(getFactorial(8));

// To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by . 5556 (or 5/9).

function getCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

let fahrenheit = prompt("Give The fahrenheit");
console.log(
  fahrenheit + " fahrenheit is " + getCelsius(fahrenheit) + " Deg celsius"
);

/* C° to F°: Celsius to Fahrenheit Conversion Formula
To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32. */
function getFahrenheit(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}

let celsius = prompt("Give the Celsius");

console.log(celsius + " celsius is " + getFahrenheit(celsius) + " Deg celsius");

/* Someone will tell you how many marks out of 100. You can tell by a function whether he will get A + or any other grade. */
function getGrate(marks) {
  switch (true) {
    case marks <= 50:
      console.log("Sorry! You Are Fail The Exam");
      break;
    case marks >= 51 && marks <= 60:
      console.log("Hurra ! You Are Pass The Exam and Your Grade Is C");
      break;
    case marks >= 61 && marks <= 70:
      console.log("Hurra ! You Are Pass The Exam and Your Grade Is B");
      break;
    case marks >= 71 && marks <= 80:
      console.log("Hurra ! You Are Pass The Exam and Your Grade Is A");
      break;
    case marks >= 81 && marks <= 100:
      console.log("Hurra ! You Are Pass The Exam and Your Grade Is A+");
      break;
    case marks >= 101:
      console.log("This Exam Is Upto 100 Marks ");
      break;
    default:
      console.log("Sorry Your Result Is Not Publish Yet");
  }
  return;
}

let marks = prompt("Give your Mark ");
getGrate(marks);

/* Use this simple interest calculator to find A, the Final Investment Value, using the simple interest formula: A = P(1 + rt) where P is the Principal amount */

function interest(amount, annualRate, timePeriod) {
  let amountOf = (amount * annualRate * timePeriod) / 100;

  return (
    "Your amount is " +
    amount +
    " " +
    annualRate +
    "% interest " +
    timePeriod +
    " year Time Period " +
    " Simple Interest is = " +
    amountOf +
    " Taka Only"
  );
}

console.log(
  interest(
    prompt("Enter Your Amount"),
    prompt("Enter Your % Rate"),
    prompt("Enter Your Time /Year")
  )
);
