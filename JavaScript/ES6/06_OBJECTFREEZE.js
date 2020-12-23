const topLanguages = {
    1: 'javascript',
    2: 'java',
    3: 'python'
}

topLanguages[4] = 'sql';
console.log(topLanguages);

Object.freeze(topLanguages);
topLanguages[5] = 'c';