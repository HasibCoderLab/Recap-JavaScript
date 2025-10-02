// console.log(document.body);
// // console.dir(document.body.childNodes[1].innerText = "Hi")
// let  heading = document.getElementById("head") ;
// heading.innerText = "AstroMachin Team NASA" ;
// // Using ClassName
// let extra = document.getElementsByClassName("extra");
// extra[0].innerText  = " Location : Dhaka";
//  extra[1].innerText  = "Team-Leader : Muen (Arduino Expart & Robotics Engg)";

// // let extra = document.getElementsByClassName("extra");
// // console.dir(extra);

//  Using ClassName
let  Pragraph = document.getElementsByTagName("p");
Pragraph[0].textContent = "In 2025 teams will explore the way robotics can help solve global challenges and improve our lives. From robots reshaping our future cities, robots driving the expansion of life across the universe to AI-enabled robots improving all aspects of our life. The possibilities are endless. Through The Future of Robots, we can shape a future that holds solutions, drives progress, and brings a better tomorrow for mankind."
console.dir(Pragraph);


// //  Using Query Selector
// let firstEle = document.querySelector("p");
// firstEle.innerText = "In 2025 teams will explore the way robotics can help solve global challenges and improve our lives. From robots reshaping our future cities, robots driving the expansion of life across the universe to AI-enabled robots improving all aspects of our life. The possibilities are endless. Through The Future of Robots, we can shape a future that holds solutions, drives progress, and brings a better tomorrow for mankind." ;
// console.log(firstEle );


// let ClassName = document.querySelectorAll(".extra");
// ClassName.innerText =  " Location : Dhaka" ; 

// let head = document.querySelector("#head");
// head.innerText =  " Team AstroMachin  NASA" ; 
