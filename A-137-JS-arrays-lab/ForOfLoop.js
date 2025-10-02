// ================================================
//               Language: JavaScript
//               Topic   : [ForOfLoop]
//               Problem :👉👉 [1]
//               Want    :  AverageMarks  
//               file    : ForOfLoop.js
// ================================================

let marks = [54, 74, 65,98, 74 , 68];

let sum = 0;

for(let val of marks){
    sum += val;
}
let result = sum /5
console.log(` Average Marks  ${result}`);



