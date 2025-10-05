// ====================        ===================
let btn = document.querySelector("#btn");
btn.addEventListener("click", (evt) => {
    console.log("Button was clickid  handler  - - 1");
    // console.log(evt);
    // console.log(evt.target);
 
})

btn.addEventListener("click", (evt) => {
    console.log("Button was clickid  handler  - - 2");
    // console.log(evt);
    // console.log(evt.target)   
})

// Handler 3 (named function)

const deletehandler3  = () => {
    console.log("Button was clickid  handler  - - 3");
} 
btn.addEventListener("click",deletehandler3);
btn.removeEventListener("click" ,deletehandler3) ;


// Example: remove handler 3 after some condition
// btn.removeEventListener("click", deleteHandler3);



btn.addEventListener("click", (evt) => {
    console.log("Button was clickid  handler   - 4");
    // console.log(evt);
    // console.log(evt.target);   
});







// ============= use EventListener........ ============
let btns = document.getElementsByClassName("button");
btns.forEach((clickBtn) => {
    clickBtn.addEventListener("click", () => {
       console.log("Button was clickid  handler  -");

    });
});


// *============== * increment Button was clickid  handler  - *  + create Button was clickid  handler  -           ============    
// **
// ***
let allBtns = document.querySelectorAll("button");
let counter = 1;

btns.forEach((clickBtn) => {
    clickBtn.addEventListener("click", () => {
        // clickBtn.innerText = "Amare Click Dise"

        let newH2 = document.createElement("h2");
        newH2.innerText = `Button was clickid  handler  - ${counter}`;
        clickBtn.parentElement.append(newH2);
        console.log(newH2);
        counter++;
    });
});
