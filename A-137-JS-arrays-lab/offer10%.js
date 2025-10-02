// ================================================
//               Language: JavaScript
//               Topic   : [ForOfLoop]
//               Problem :👉👉 [2]
//               Want    : Offer10%  
//               file    : offer10%.js
// ================================================
let price = [100, 52, 65, 265, 47, 65];

for (let i = 0; i < price.length; i++) {
    let offer = price[i] / 10;
    price[i] -= offer;

}
console.log(price);
