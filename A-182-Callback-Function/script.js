// ================|1st Example|============
// function sum(a,b) {
//     console.log(a+b);

// }
// function calculate(a,b, sumCallBack) {
//     sumCallBack(a,b);
// }
// calculate(1,2,sum)

// ================|2nd Example|============
function calculator(a, b, sumCallback) {
    sumCallback(a, b);

}
calculator(1, 3, (a, b) => {
    console.log(a + b);

});

// ================|3rd Example|============
function getData(dataId) {
    console.log("Data", dataId);

}

// ================|4th Example|============
function GetData(DataId) {
    setTimeout(() => {
        console.log("Data", DataId);

    }, 2000);
}
// ================|5th Example|============
// function Data(IdOfData, getNextData) {
//     setTimeout(() => {
//         console.log("Data" , IdOfData);
//         if(getNextData){
//             getNextData();
//         }
//     }, 3000);
// };
// // Callback Hell
// Data(1 , () =>{
//     console.log("Loding Data2 .........");

//     Data(2, () =>{
//         console.log("Loding Data2 .........");
//         Data(3 , () =>{

//         });
//     });
// });

const Data = (IdOIfData, GetNextData) => {
    setTimeout(() => {
        console.log("Data", IdOIfData);

        if (GetNextData) {
            GetNextData();
        }
    }, 2000);
}
Data(1, () => {
    console.log("Loding Data 2......");

    Data(2, () => {
        console.log("Loding Data 3......");

        Data(3, () => {
            console.log("Loding Data 4......");

            Data(4, () => {
                console.log("All Data Print");

            });
        });
    });
});