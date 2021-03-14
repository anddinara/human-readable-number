module.exports = function toReadable (number) {
  let str = '';

  const Name = {
  0: 'zero',
  1: 'one', 
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven', 
  8: 'eight', 
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen', 
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy', 
  80: 'eighty',
  90: 'ninety',
  100: 'hundred'
};

  if (number.toString().length === 1 || (number.toString().length === 2 && number <= 20)) {
    str = Name[number];
  } else if (number.toString().length === 2 && (number % 10 === 0)) {
     str = `${Name[Math.floor(number / 10) * 10]}`;
  } else if (number.toString().length === 2) {
    str = `${Name[Math.floor(number / 10) * 10]} ${Name[Math.floor(number % 10)]}`;
  } else if (number.toString().length === 3 && ((number % 100 <= 20) && (number % 100 > 0))) {
    str = `${Name[Math.floor(number / 100)]} ${Name[100]} ${Name[number % 100]}`;
  } else if (number.toString().length === 3 && (number % 100 === 0)) {
     str = `${Name[Math.floor(number / 100)]} ${Name[100]}`;
  } else if (number.toString().length === 3 && (number % 10 === 0)) {
    str = `${Name[Math.floor(number / 100)]} ${Name[100]} ${Name[number % 100]}`;
  } else {
    str = `${Name[Math.floor(number / 100)]} ${Name[100]} ${Name[Math.floor(number % 100 / 10) * 10]} ${Name[number % 10]}`;
  }
  return str;

}

