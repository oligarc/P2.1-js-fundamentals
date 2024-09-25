//Using the year as a parameter

const getYourAge = (birthYear) => {
  let date = new Date();
  currentyear = date.getFullYear();
  return currentyear - birthYear;
};

let age = getYourAge(1999);
console.log(age);

//Using a full birthdate
//Supposing the format is YYYY-MM-DD

const getYourAgeFullBirthDate = (fullBirthDate) => {
  let date = new Date();
  currentyear = date.getFullYear();
  let yearTaken = Number.parseInt(fullBirthDate.slice(0, 4));
  return currentyear - yearTaken;
};

let age2 = getYourAgeFullBirthDate("1999-03-25");
console.log(age2);
