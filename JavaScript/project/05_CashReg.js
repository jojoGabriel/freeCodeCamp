function checkCashRegister(price, cash, cid) {

    function sumCashOnRegister(cid) {
        let total = 0;
        for (let x = 0; x < cid.length; x++) {
            total += cid[x][1];
        }
        return total;
    }

    let currency = {
        "ONE HUNDRED": 100,
        "TWENTY": 20,
        "TEN": 10,
        "FIVE": 5,
        "ONE": 1,
        "QUARTER": 0.25,
        "DIME": 0.1,
        "NICKEL": 0.05,
        "PENNY": 0.01
    }

    let currencyAmount = [
        100,
        20,
        10,
        5,
        1,
        0.25,
        0.1,
        0.05,
        0.01
    ];

    let currencyName = [
        "ONE HUNDRED",
        "TWENTY",
        "TEN",
        "FIVE",
        "ONE",
        "QUARTER",
        "DIME",
        "NICKEL",
        "PENNY"
    ];

    function descCurr(a, b) {
        return currency[b[0]] - currency[a[0]];
    }

    function buildResult(sts) {
        result.status = sts;
        let change = []
        for (let key of Object.keys(changeCurrency)) {
            // let x = Math.round(changeCurrency[key] * 100
            change.push([key, changeCurrency[key]]);
        }
        change.sort(descCurr);
        result.change = change;
    }

    let result = {};
    let changeExpected = cash - price;
    let cashOnRegister = sumCashOnRegister(cid);

    if (cashOnRegister < changeExpected) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        return result;
    }

    if (cashOnRegister == changeExpected) {
        result.status = "CLOSED";
        result.change = cid;
        console.log(result);
        return result;
    }

    // building currencyInReg
    cid.sort(descCurr);
    let currencyInReg = {};
    for (let i = 0; i < cid.length; i++) {
        currencyInReg[cid[i][0]] = cid[i][1];
    }

    let changeCurrency = {};
    let remainingChange = changeExpected;
    for (let i = 0; i < currencyAmount.length; i++) {
        while (currencyAmount[i] <= Number(remainingChange.toFixed(2))) {
            //            {
            if (currencyInReg[currencyName[i]] >= currency[currencyName[i]]) {
                remainingChange -= currency[currencyName[i]];
                remainingChange = Number(remainingChange.toFixed(2));
                currencyInReg[currencyName[i]] -= currency[currencyName[i]];
                currencyInReg[currencyName[i]] = Number(currencyInReg[currencyName[i]].toFixed(2));
                changeCurrency[currencyName[i]] = changeCurrency[currencyName[i]] ?
                    changeCurrency[currencyName[i]] + currency[currencyName[i]] :
                    currency[currencyName[i]];
                changeCurrency[currencyName[i]] = Number(changeCurrency[currencyName[i]].toFixed(2));
            } else {
                break;
            }
        }
    }

    if (remainingChange > 0.01) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        console.log(result);
        return result;
    }

    // if (cashOnRegister == changeExpected) {
    //     buildResult("CLOSED")
    //     console.log(result);
    //     return result;
    // }

    buildResult("OPEN");
    console.log(result);
    return result;

}


// running tests
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);