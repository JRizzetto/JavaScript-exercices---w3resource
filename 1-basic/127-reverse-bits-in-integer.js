/*
127. Reverse Bits in Integer

Write a JavaScript program to reverse the order of bits in a integer. 
14 -> 00001110 -> 01110000 -> 112
56 -> 00111000 -> 00011100 -> 28
234 -> 11101010 -> 01010111 -> 87
*/

function reverseBitsInteger(num) {
  let bitArr = num.toString(2).split("");

  let strLen = bitArr.length;

  for (let i = 0; i < 8 - strLen; i++) {
    bitArr.unshift("0");
  }

  return parseInt(bitArr.reverse().join(""), 2);
}

console.log(reverseBitsInteger(14));
