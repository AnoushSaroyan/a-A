const nums = [1, 2, 3, 4, 5, 6];

Array.prototype.myEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
};

// nums.myEach(num => console.log(`${num} doubled is ${num * 2}`));

Array.prototype.myMap = function(cb) {
    let mapped = [];

    this.myEach( num => mapped.push(cb(num)) );
    return mapped;
}

// nums.myMap(num => num * 2);

Array.prototype.myReduce = function(cb, initialValue) {
    let arr = this;

    if (!initialValue) {
        initialValue = arr[0];
        arr = arr.slice(1);
    }

    let acc = initialValue;

    arr.myEach(el => acc = cb(acc, el) );

    return acc;
}

const reducer = (acc, currentValue) => acc + currentValue;

nums.myReduce(reducer);
nums.myReduce(reducer, 25);

