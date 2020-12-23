const aRequest = new Promise((resolve, reject) => {

    let positive = false;
    if (positive) {
        resolve("success");
    } else {
        reject("failure");
    }
});

aRequest.then(result => { console.log(result) });

aRequest.catch(error => { console.log(error) });