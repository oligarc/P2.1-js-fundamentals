const daysBetweenDates = (date1, date2) => {
  let parse1 = Date.parse(date1);
  let parse2 = Date.parse(date2);
  return Math.abs((parse1 - parse2) / (24 * 60 * 60 * 1000));
};

let date1 = "2024-01-01";
let date2 = "2024-12-31";

let daysbetween = daysBetweenDates(date1, date2);
console.log(daysbetween);
