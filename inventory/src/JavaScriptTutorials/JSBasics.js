// EASY
const string = "a,b,c,d,e,f,g,h";
// console.log(string);
const arr = string.split(",");

console.log(arr);
// console.log(arr.length);

// HARD
const wasteOfTime = ["a", "b", "c"];

for (let i = arr.length - 1; i > 0; i--) {
  let k = Math.floor(arr.length * Math.random());
  [arr[i], arr[k]] = [arr[k], arr[i]];
}

console.log(arr);
// console.log(arr.length);
