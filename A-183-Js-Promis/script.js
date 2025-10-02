// =====================| 1st Example |==============
let promise01 = new Promise((resolve, reject) => {
    console.log("I'm   a Promise ");
    resolve(1230)
});
// // =====================| 2nd Example |==============

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data, ", dataId);
            resolve("Success");
            if (getNextData) {
                getNextData();
            }
        }, 5000)
    })
}

// =====================| 3rd Example |==============
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I'ma   Promise");
        resolve("success");
        //     setTimeout(() => {
        //     reject("netwark Err"); 
        //     }, 2000);
    });
}
let promise = getPromise();
promise.then((res) => {
    console.log("Promise Fulfild", res);

});
promise.catch((err) => {
    console.log("Rejected", err);

});

// =====================| 4th Example |==============
const asynFunc1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("Success");
        }, 4000);
    })
};

const asynFunc2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("Success");
        }, 4000);
    })
}
console.log("Fetching Data1...........");

asynFunc1().then((res) => {
    {
        console.log(res);
        console.log("Fetching Data2...........");
        asynFunc2().then((res) => {
            console.log(res);

        })
    }
})


// =====================| 5th Example |==============
const getData1 = (DataID) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", DataID);
            resolve("Success");
        }, 4000)
    })
}
getData1(1).then((res) => {
    console.log(res);
    console.log("Loding Data 2");
    return getData1(2)
}).then((res) => {
    console.log(res);

    console.log("Loding Data 3");

    return getData1(3)
}).then((res) => {
    console.log(res);

})