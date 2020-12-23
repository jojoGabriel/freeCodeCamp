function orbitalPeriod(arr) {

    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    for (let i = 0; i < arr.length; i++) {
        let avgAlt = arr[i]['avgAlt'];
        let t = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + avgAlt, 3) / GM));
        delete arr[i]['avgAlt'];
        arr[i]['orbitalPeriod'] = t;
    }
    return arr;
}

// orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
let r = orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }])
console.log(r);