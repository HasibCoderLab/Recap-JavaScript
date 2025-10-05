// ============|Practice Problem 01|=============
let DATA = "Secret Data";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    };
    viewData() {
        console.log("Data =  ", DATA);

    };

}
let student01 = new User("Coder", "coder@gmail.com");
let student02 = new User("Rifat", "Rifat.01@gmail.com");

let teacher01 = new User("Adam", "adamTeach@gmail.com");

// ============|Practice Problem 02|=============

let Data = "Personal Data" ;

class User1 {
    constructor(name , email) {
        this.name = name;
        this.email = email;

    };

    viewData1(){
        console.log("Data = " , Data );
        
    };
}

class Admin extends User1 {
    constructor(name , email){
        super(name ,email)
    }
editData(){
    Data = "Some New Value" ;
    
}
}

let student1 = new User("Coder", "coder@gmail.com");
let student2 = new User("Rifat", "Rifat.01@gmail.com");
let teacher1 = new User("Adam", "adamTeach@gmail.com");


let admin1 = new Admin("SuperAdmin", "admin@gmail.com");

admin1.editData();