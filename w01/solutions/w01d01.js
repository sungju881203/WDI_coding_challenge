// using for loop.
// can anyone come up with fancier solution with reduce?

const compress = (str) => {
  let newStr  = "";
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
  if(str[i] === str[i + 1]) {
    counter++;
  } else {
    newStr += str[i];
    newStr += counter;
    counter = 1;
    }
  }
  return newStr;
}

// test
compress('aaaabbcccccca');
