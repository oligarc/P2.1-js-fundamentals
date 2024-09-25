//Two different ways to do it

//Easy one
const getDate = () => {
  let date1 = new Date();
  return console.log(date1.toISOString());
};

//Not so easy to follow but at least it comes up with a bit of logic
const getAnotherDate = () => {
  //`YYYY-MM-DD HH:MM:SS`
  let date2 = new Date();
  return console.log(
    date2.getFullYear() +
      "-" +
      (date2.getMonth() + 1) + //That 1 over there it's because of how JS manipulates months (from 0 to 11)
      "-" +
      date2.getDate() + //GetDate takes the day while getDay returns from 0 to 6 (Sunday-Saturday)
      " " +
      date2.getHours() +
      ":" +
      date2.getMinutes() +
      ":" +
      date2.getSeconds()
  );
};

console.log("Not easy to follow function");
let prueba = getAnotherDate();
console.log("Easy to follow function");
let prueba2 = getDate();
