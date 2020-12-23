class Screen {
    constructor(size) {
        this._size = size;
    }

    get size() {
        return this._size;
    }

    set size(size) {
        this._size = size;
    }
}

const scrn = new Screen(15);
console.log(scrn.size);
scrn.size = 20;
console.log(scrn.size);
