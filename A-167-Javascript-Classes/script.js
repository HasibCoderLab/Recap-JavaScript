// ===================|     Example 01    |==================
// class ToyotaCars {
//     start(){
//         console.log("Run The Car");

//     }

//     Stop(){
//         console.log("Break The Car");

//     }
//     setBrand(brand){
//         this.BradVar = brand 
//     }

// }

// let fortuner = new ToyotaCars();
// fortuner.setBrand("Fortuner");
// let lexus = new ToyotaCars();
// lexus.setBrand("Lexus");




// ===================|   *constructor *    |===========================
class city {
    constructor(star, people) {
        console.log("Best Cities of Bangladesh");
        this.star = star;
        this.people = people;

    };
    Rajshahi() {
        console.log("This is a clean City .");

    };
    khulna() {
        console.log("This is very Beautyful City");

    };
};
let city1 = new city( "5*", 10000);
let city2 = new city("3*" , 1000); 