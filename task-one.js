function findTheLarger(one, tow, three) {
  /* if (one > tow && one > three) {
    return one;
  } else if (tow > one && tow > three) {
    return tow;
  } else {
    return three;
  } */
  const max = Math.max(one, tow, three);
  return max;
}

const result = findTheLarger(230, 745, 90);

console.log(result);

function findSmall(one, tow, three) {
  /*  if (one < tow && one < three) {
    return one;
  } else if (tow < one && tow < three) {
    return tow;
  } else {
    return three;
  } */
  const min = Math.min(one, tow, three);
  return min;
}

const small = findSmall(4, 23, 67);

console.log(small);

const arr = [20, 34, 76, 81, 23];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  sum = sum + element;
}
console.log(sum);
