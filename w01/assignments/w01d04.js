const count8 = (str) => {
  let counter = 0;
  for (let j = 0; j < str.length; j++) {
    if (str[j]==='8') {
      counter ++;
    }
  }
  return counter;
}

const eightCounter = (num) => {
  let numOfEight = 0;
  for (let i = 1; i < num; i++) {
    let count = count8(i.toString());
    numOfEight += count;
  }
}

