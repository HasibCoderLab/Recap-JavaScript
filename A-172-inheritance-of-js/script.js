// =================|Example 01|=============
// class Parents {
//     hello() {
//         console.log("Hello");

//     };
// }
// class Child extends Parents { }
// let obj = new Child();
// obj.hello();

// =================|Example 02|=============
class Person {
    constructor(){
        this.projati = "Homo"
    }
    eat() {
        console.log("Just eat and eat");

    };
    sleep() {
        console.log("No sleep just eat");

    }

    work() {
        console.log("Nothing work just eat");

    };
};

class Engineer extends Person {
    eat() {
        console.log("All Halal Food Need");

    };
    sleep() {
        console.log("No Need Sleep");

    };
    work() {
        console.log("Hard Worker");

    };
};
class Doctor extends Person {
    eat() {
        console.log("All Halal Food Need");

    };

    sleep() {
        console.log("No Need Sleep Just Focus Money");

    };
    work() {
        console.log("Cuting Body and Earn Money");

    };
}
let EngArafatObj = new Engineer();
EngArafatObj.sleep();
let DrRohitObj = new Doctor();

DrRohitObj.work();
