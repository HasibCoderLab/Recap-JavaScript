let  divs = document.querySelectorAll(".box");
console.log(divs);

let index = 1 ;
for(div of divs){
    div.innerText = `New unique value ${index}`;
    index++
}
// divs[0].innerText = "New unque value 2";
// divs[1].innerText = "New unque value 2";
// divs[2].innerText = "New unque value 2";