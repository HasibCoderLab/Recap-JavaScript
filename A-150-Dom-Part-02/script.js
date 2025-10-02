// let p = document.querySelector(".pa");
// // console.log(pa.getAttribute(".pa"));
// let value  = div.getAttribute("box");
// console.log(value);











//  ================= Create Element ===========
// ========    /* create btn to fast */  =============    ==============
let newBtn1st = document.createElement("button");
newBtn1st.innerText = "Click Me 1st";
// console.log(newBtn1st);
let divAdd1st = document.querySelector("div");
divAdd1st.prepend(newBtn1st)

// ========    /* create btn to lasr */  =============    ==============
let newBtn  = document.createElement("button");
newBtn.innerText = "Click Me";
// console.log(newBtn);
let addingDiv = document.querySelector("div");
addingDiv.append(newBtn)

// ========    /* create btn to After node ist */  =============    ==============
let afterNode = document.createElement("button");
afterNode.innerText = "Click";
// console.log(afterNode);
let divNode = document.querySelector("div");
divNode.after(afterNode)

// ========    /* create btn to After node ist */  =============    ==============
let beforeNode = document.createElement("button");
beforeNode.innerText = "Click me";
// console.log(beforeNode);
let divNode1st = document.querySelector("div");
divNode1st.before(beforeNode);

// ========    /* create Heading */  =============    ==============

let heading = document.createElement("h1");
heading.innerText = "Hey ! I'm JS ";
console.log(heading);
document.querySelector("body").prepend(heading)
heading.style.textAlign = "center"

// ========    /* Delete  P tag */  =============    ==============
let Delete = document.querySelector("p");
Delete.remove();


