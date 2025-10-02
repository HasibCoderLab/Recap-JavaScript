const URL = "https://catfact.ninja/fact";
const para = document.querySelector("#fact");
const btn = document.querySelector("button");

const getFact = async () => {
    console.log("Geting ......");

    let responce = await fetch(URL);
    console.log(responce.status);
    console.log(responce);
    // responce.json;
    let data = await responce.json();

    console.log(data[1]);
    para.innerText = data.fact;



}
////// Fresh code 
const getFact1 = async () => {
    let responce = await fetch(URL);
    let data = await responce.json();
    para.innerText = data.fact;
}


// USE Promise chine
const getFacts = () => {
    fetch(URL).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        para.innerText = data.fact;


    });
}
btn.addEventListener("click", getFacts);
btn.addEventListener("click", getFact);
btn.addEventListener("click", getFact1);