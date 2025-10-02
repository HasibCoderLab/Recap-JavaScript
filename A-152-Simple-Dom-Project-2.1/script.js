let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red ";
console.log(newBtn);
let addBtn = document.querySelector("body").prepend(newBtn);
