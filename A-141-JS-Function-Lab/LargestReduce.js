// ================================================
//               Language: JavaScript
//               Topic   : [Function]
//               Problem :👉👉 [9]
//               Want    :  LargestReduce
//               file    : node Function/LargestReduce.js
// ================================================
let arr  = [ 10 , 25, 36, 47,65,5] ;
const output = arr.reduce((res , value)=>{
   return  res >value ? res :value
})
console.log(output);

