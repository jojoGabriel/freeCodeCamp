function uniteUnique(arr) {
    let uniq = [];
    for (let i = 0; i < arguments.length; i++) {
        let series = arguments[i];
        for (let j = 0; j < series.length; j++) {
            if (uniq.indexOf(series[j]) < 0) {
                uniq.push(series[j]);
            }
        }
    }
    return uniq;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
