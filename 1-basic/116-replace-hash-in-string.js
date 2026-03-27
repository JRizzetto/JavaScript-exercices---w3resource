/*
116. Replace Hash in String to Make Divisible by 3

Write a JavaScript program to find all the possible options 
to replace the hash in a string (Consists of digits and one hash (#)) 
with a digit to produce an integer divisible by 3. 
For a string "2*0", the output should be : ["210", "240", "270"]
*/

function replaceHashString(str) {
  let left = "0".charCodeAt();
  let rigth = "9".charCodeAt();
  let divisibleList = [];
  let positionHash = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() < left || str[i].charCodeAt() > rigth) {
      positionHash = i;
    }
  }

  for (let j = 0; j < 10; j++) {
    let changeHash = str.replace(str[positionHash], j);

    if (changeHash % 3 === 0) {
      divisibleList.push(changeHash);
    }
  }

  return divisibleList;
}

console.log(replaceHashString("2#0"));
