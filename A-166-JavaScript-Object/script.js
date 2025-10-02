// =========== Example 01  |=================== 
// const student = {
// name :  "Mohi" ,
// marks :454,
// printMarks:function(){
//     console.log("marks = ", this.marks);
    
// },
// };

// ===========| Example 02  |=================== 
const employee = {
    calTax(){
        console.log("Tax is 10%");
        
    },
};

const Kiron = { 
    salary : 1111,
    calTax(){
        console.log("Tax is 25%");
        
    }
};
const Kiron2 = { 
    salary : 2222,
};
const Kiron3 = { 
    salary : 3333,
}
const Kiron4 = { 
    salary : 4444,
};
const Kiron5 = { 
    salary : 5555,
};

Kiron.__proto__ = employee; 
Kiron2.__proto__ = employee; 
Kiron3.__proto__ = employee; 
Kiron4.__proto__ = employee; 
Kiron5.__proto__ = employee; 