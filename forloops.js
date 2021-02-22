const arr = ["CIA", "MIB", "FBI", "IRS", "kjnasb"];

//   initial    conditional     incremental
// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
//   console.log(arr[i]);
// }

let newArr = [];
for (let i = 0; i < arr.length; i++) {
// newArr.push(arr[i].split(""));
newArr.push(arr[i].split("").join("."));
}
console.log(newArr);
