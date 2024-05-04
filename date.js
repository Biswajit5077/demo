let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

console.log(typeof(myDate));


let myCreateDAte = new Date(24,0,24)
console.log(myCreateDAte.toLocaleDateString());

let myTimestamp = Date.now()
console.log(Math.floor(Date.now()/1000));


