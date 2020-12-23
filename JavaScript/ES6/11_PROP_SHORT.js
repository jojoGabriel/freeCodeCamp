// long hand
const coord = (x, y) => ({
    x: x,
    y: y
});
console.log(coord(10, 5));

// short hand
const axis = (x, y) => ({ x, y });
console.log(axis(5, 10));
