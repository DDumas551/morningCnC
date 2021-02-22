let jello = true;
let mold = false;
let thirdVar = false;
let fourthVar = false;

// jello ? console.log("true") : console.log("false");
// mold ? console.log("true") : console.log("false");

jello === mold ? console.log("true") : console.log("false");

// 5 === 5 ? console.log("true") : console.log("false");

// function isWeekend(day) {
//   return day === "Saturday" || day === "Sunday" ? "$20.00" : "$10.00";
// }
// console.log(isWeekend("Saturday"));

mold
  ? console.log("true")
  : thirdVar
  ? console.log("true")
  : console.log("Chained ternary is false");

mold
  ? console.log("true")
  : thirdVar
  ? console.log("true")
  : fourthVar
  ? console.log("true")
  : jello
  ? console.log("Jello is delicious")
  : console.log("placeholder");
