/*
138. Reverse Bits in 16-Bit Unsigned Integer

Write a JavaScript program to reverse the bits of a given 16-bit unsigned short integer. 
*/

function reverseBits16(num) {
  let binary = num.toString(2).split("");

  while (binary.length < 16) {
    binary.unshift("0");
  }

  return parseInt(binary.reverse().join(""), 2);
}

// console.log(reverseBits16(15));
// console.log(reverseBits16(5));
// console.log(reverseBits16(1));

function sixteen_bits_reverse(num) {
  let result = 0;

  for (let i = 0; i < 16; i++) {
    result = result * 2 + (num % 2);
    num = Math.floor(num / 2);
  }

  return result;
}

console.log(sixteen_bits_reverse(12345));
console.log(sixteen_bits_reverse(10));
console.log(sixteen_bits_reverse(5));
