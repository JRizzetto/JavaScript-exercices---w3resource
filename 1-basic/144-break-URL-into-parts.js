/*
144. Break URL into Parts

Write a JavaScript program to break an URL address and put its parts into an array.  
Note: url structure : ://.org[/] and there may be no part in the address.
*/

function breakUrl(url) {
  let stack = url.split(/[/ :]/);
  let newUrl = [];

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] !== "") {
      newUrl.push(stack[i]);
    }
  }

  newUrl[1] = newUrl[1].replace(".com", "");

  return newUrl;
}

console.log(breakUrl("https://www.w3resource.com/javascript-exercises/"));
