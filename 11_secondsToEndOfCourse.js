function getMilliseconds() {
  let finalDate = new Date(2025, 2, 20);
  let currentDate = new Date();
  return finalDate - currentDate;
}

setInterval(() => {
  const milliseconds = getMilliseconds();
  const secondsRemaining = Math.floor(milliseconds / 1000);

  console.log(
    `Seconds remaining to the end of the course: ${secondsRemaining}`
  );
}, 1000); // Ejecutar cada segundo
