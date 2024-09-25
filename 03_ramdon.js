const generateRandomNumber = (minimum,maximum) => 
    Math.round(Math.random()*(maximum-minimum) +minimum)


//let array1 = []
console.log("Between 0 and 99999")
for(let i=0;i<10;i++){
    //array1.push(generateRandomNumber(0,99999))
    console.log(generateRandomNumber(0,99999))
}


console.log("Between 10 and 40")
for(let i=0;i<10;i++){
    //array1.push(generateRandomNumber(0,99999))
    console.log(generateRandomNumber(10,40))
}

console.log("Between 18 and 90")
for(let i=0;i<10;i++){
    //array1.push(generateRandomNumber(0,99999))
    console.log(generateRandomNumber(18,90))
}


console.log("Between 1980 and 2020")
for(let i=0;i<10;i++){
    //array1.push(generateRandomNumber(0,99999))
    console.log(generateRandomNumber(1980,2020))
}

