// // ================================================
// //               Language: JavaScript
// //               Topic   : [Function]
// //               Problem :👉👉 [4]
// //               Want    :  CountVowels
// //               file    : CountVowels.js    
// // ================================================
function countVowel(str) {
    let count = 0;
    const vowels = "AEIOUaeiou";

 for (const char of str) {
   if (vowels.includes(char)) {
    count++
   }
 }
 return count ;

}
const result = countVowel("Developer");
console.log(`Number of vowels  ${result}`); 