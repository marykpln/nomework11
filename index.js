function sumDigits(num) {
  if (isNaN(num)) {
    return NaN;
  }
  if (num < 0) {
    num = -num;
  }
  let sum = 0;
  do {
    sum += Math.floor(num % 10);
    num = num / 10;
  } while (num > 0);

  return sum;
}

//TODO
//display out word "ananas"
//display out word "ananas" using only letters 'a' and 's'

function displayAnanas() {
  const a = "a";
  const str = `a${+a}as`;
  console.log(str.toLocaleLowerCase());
}

displayAnanas();

console.log(sumDigits(123));
console.log(sumDigits("123"));
console.log(sumDigits("a123"));
console.log(sumDigits("123a"));
console.log(sumDigits(-123));
console.log(sumDigits(123.33333));
