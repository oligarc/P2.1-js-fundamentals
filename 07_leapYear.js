const isLeapYear = (year) => {
  if (year % 4 == 0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} isn't a leap year`);
  }
};

isLeapYear(1980);
