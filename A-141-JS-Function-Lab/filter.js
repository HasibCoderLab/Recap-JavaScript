// ================================================
//               Language: JavaScript
//               Topic   : [Function]
//               Problem :👉👉 [8]
//               Want    :  filter
//               file    : filter.js
// ================================================
let num = [1,12,24,20,,35,25,3];
let newNum = num.filter((val) =>{
   return  val %2 === 0 ;
   
})
console.log(newNum);
