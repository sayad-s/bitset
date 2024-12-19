class Bitset {
    constructor() {
        this.maxPos = 77000;
        this.size = Math.ceil(this.maxPos / 32);
        this.arr = new Array(this.size).fill(0);
    }

    setBit(pos, val) {
        if (pos > this.maxPos) {
            return this;
        }
        if (val !== 0 && val !== 1) {
            return this;
        }
      
        let place = Math.floor(pos / 32);
        let bit = Math.pow(2, pos % 32);

        if (val === 0) {
            this.arr[place] &= ~bit;
        } else if (val === 1) {
            this.arr[place] |= bit;
        }
    }

    getPos(pos) {
        if (pos > this.maxPos) {
            return this;
        }
        
        let place = Math.floor(pos / 32);
        let bit = Math.pow(2, pos % 32);

        if (this.arr[place] & bit) {
            return true;
        } else {
            return false;
        }
    }
}

let bitset = new Bitset();
bitset.setBit(78000, 1);
bitset.setBit(50, 1);
console.log(bitset.getPos(78000));
