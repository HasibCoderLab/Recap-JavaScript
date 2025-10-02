//==============|Example 01|==========
async function hello() {
    console.log("hello");
}
//==============|Example 02|==========

function Api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather Data");
            resolve(1200)
        }, 4000);
    })
}

async function getWeatherData() {
    await Api(); //1st call
    await Api();  // 2nd call

}

//==============|Example 03|==========
const getData = (DataID) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", DataID);
            resolve(2025)

        }, 4000);
    })
}

//Async-Await
async function getAllData() {
    console.log("loding 1st data");

    await getData(1);
    console.log("loding 2nd data");

    await getData(2);
    console.log("loding 3rd data");

    await getData(3);
    console.log("loding 4th data");

    await getData(4);

}


//==============|Example 03|==========
const getData1 = (DataID) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", DataID);
            resolve(2025)

        }, 4000);
    })
}

//Async-Await
(async function getAllData() {
    console.log("loding 1st data");

    await getData(1);
    console.log("loding 2nd data");

    await getData(2);
    console.log("loding 3rd data");

    await getData(3);
    console.log("loding 4th data");

    await getData(4);

})()