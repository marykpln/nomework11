function sumDigits(num) {
  let str = num.toString();
  let sum = 0;
  for (let digit of str) {
    sum += parseInt(digit);
  }
  return sum;
}

//TODO
//display out word "ananas"
//display out word "ananas" using only letters 'a' and 's'

function displayAnanas() {
  const an = `a${String.fromCharCode(110)}an${String.fromCharCode(110)}s`;
  console.log(an);
}

displayAnanas();

console.log(sumDigits(123));
console.log("a25", sumDigits("125a"));
