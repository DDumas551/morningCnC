//DO THIS
const arr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p";
const splitArr = arr.split(",");

console.log(splitArr);

//NOT THIS
const wasteOfTime = ["a", "b", "c"];

// ONWARD!
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let k = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[k]] = [arr[k], arr[i]];
  }
  return arr;
};

console.log(shuffle(splitArr));
