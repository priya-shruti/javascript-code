function prom(a,b) {
    return new Promise(function (resolve, reject) {
        console.log("Fetching data, please wait")
        var c=a/b;
        if (a,b) {
            resolve(`Your answer is : ${c}`);
        }
        else {
            reject("Failed to calculate");
        }
    });
}
let onfulfilment = (result) => {
    console.log(result)
}
let onRejection = (error) => {
    console.log(error);
}
prom(5,2).then(onfulfilment).catch(onRejection);