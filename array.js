const myArr = new Array(1,2,3,4,5)
console.log(myArr[4]);


//array method

const myArr2 = [0,1,2,3,4,5]

myArr2.push(6)
myArr2.push(7)
myArr2.pop()   // [pop-last value remove]
console.log(myArr2);

myArr2.unshift(9)  //[unshift-top of the value added]
myArr2.shift()  //[shiift-top value removed]
console.log(myArr2); 


console.log(myArr2.includes(10));
console.log(myArr2.indexOf(3));

const newArr = myArr2.join()
console.log(myArr2);
console.log(newArr);
console.log(typeof newArr);


//   slice, splice

console.log("A", myArr2);
const myn1 = myArr2.slice(1,3)

console.log(myn1);
console.log("B",myArr2 );

const myn2 = myArr2.splice(1,3)
console.log(myn2);
console.log("C",myArr2 ); //{manupulate kiya hai}
