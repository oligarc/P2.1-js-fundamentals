function getMultiplicationTable(number) {
  for (let i = 1; i < 11; i++) {
    console.log(`${number}*${i} = ${number * i}`);
  }
}

getMultiplicationTable(5);
