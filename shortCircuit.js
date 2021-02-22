const $ = (x) => console.log(x);
let hey;

$(typeof hey);
$(typeof "jello mold");
$(typeof 0);
$(0 === false);
$(typeof false);
$(typeof BigInt);
$(typeof {});
$(typeof []);
