function sumDigits(num) {
  if (num < 0) {
    num = -num;
  }

  let sum = 0;
  if (isNaN(num)) {
    return NaN;
  }
  for (; num > 0; num = num / 10) {
    sum += Math.floor(num % 10);
  }

  return sum;
}

//TODO
//display out word "ananas"
//display out word "ananas" using only letters 'a' and 's'

function displayAnanas() {
  const a = "a";
  const str = `a${Number(a)}as`;
  console.log(str.toLocaleLowerCase());
}

displayAnanas();

console.log(sumDigits(123));
console.log(sumDigits("123"));
console.log(sumDigits("a123"));
console.log(sumDigits("123a"));
console.log(sumDigits(-123));
console.log(sumDigits(123.33333));
