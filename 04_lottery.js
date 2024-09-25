const generateRandomNumber = (minimum,maximum) => 
    Math.round(Math.random()*(maximum-minimum) +minimum)

for (let i = 0; i < 10; i++) {
    console.log(generateRandomNumber(10000, 99999))
}