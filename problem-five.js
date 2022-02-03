/* ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। */

function feetToInch(feet) {
  const ft = feet * 12;
  return ft;
}
console.log("The inches Is", feetToInch(5));

/* ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। */

function centimeterToMeter(centimeter) {
  const cm = centimeter / 100;

  return cm;
}

console.log("Meters Is ", centimeterToMeter(12));

/* ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। */

function paperRequirements(FirstBook, SecondBook, ThirdBook) {
  const bookOnePage = 100;
  const bookTowPage = 200;
  const bookThreePage = 300;
  //   Book Multiplication
  const bookOne = FirstBook * bookOnePage;
  const bookTwo = SecondBook * bookTowPage;
  const bookThree = ThirdBook * bookThreePage;
  const totalPage = bookOne + bookTwo + bookThree;
  return totalPage;
}
console.log("Total Page ", paperRequirements(5, 7, 2));

/* ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। */

function bestFriend(friends) {
  let name = friends[0];
  for (const elements of friends) {
    let nameLength = elements.length;
    if (nameLength > name.length) {
      name = elements;
    }
  }
  return name;
}

const friends = [
  "Tukaram Dumdhumar Kandario ",
  "Samsuddin Mohammod Bodor",
  "Tomal",
  "Kamal",
  "Jamal",
  "ChodorUddin",
  "Bodoruddin",
  "Kallu",
  "Challu",
];

console.log(bestFriend(friends));

/* ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। */

function posativeNumber(numbers) {
  let emptyArr = [];
  for (const number of numbers) {
    if (number >= 0) {
      emptyArr.push(number);
    } else if (number < 0) {
      break;
      emptyArr.push(number);
    }
  }
  return emptyArr;
}
const numbarsArr = [
  1, 3, 4, 5, 67, 10, 20, 32, -32, -1, 0, -0, 90, 100, 120, -120,
];
console.log(posativeNumber(numbarsArr));
