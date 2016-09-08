// Joe got it first :D

function count8s(num) {
  let counter = 0;
  for (let i = 1; i <= num; i++) {
    let str = i.toString()
    for (let j = 0; j < str.length; j++) {
      if (str[j] === "8") {
        counter++
        console.log(str);
      }
    }
  }
  return counter;
}

// regex way
function getEights() {
    var count = 0;
    for(i = 1; i <= 10000; i++) {
        count += ((i + "").split(/8/g).length - 1);
    }
    console.log(count);
}


// ****** FUCK COMPUTER, MATH WAY!!! :P ******
// ___8   10^3 = 1000
// __8_   10^3 = 1000
// _8__   10^3 = 1000
// 8___   10^3 = 1000
// you should know this if you took probability theory.
// if last digit is 8, you can have 10*10*10 combinations of numbers
// repeat this for all 4 digits. and you get 4000 combinations.
// yeah, machines can't beat human YET.
