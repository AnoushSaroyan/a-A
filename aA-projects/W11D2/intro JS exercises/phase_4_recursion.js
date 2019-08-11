// range(start, end) - receives a start and end value, returns an array from start up to end
function range(start, end) {
    if (start === end) {
        return [];
    }

    let arr = range(start, end - 1);
    arr.push(end - 1);

    return arr;
}

// range(0, 3);


// sumRec(arr) - receives an array of numbers and recursively sums them
function sumRec(arr) {
    if (arr.length === 0) {
        return 0;
    }

    return arr[0] + sumRec(arr.slice(1));
}

// sumRec([1, 2, 3, 4, 5, 6]);


// exponent(base, exp) - receives a base and exponent, 
// returns the base raise to the power of the exponent (base ^ exp)
function exponent(base, exp) {
    if (exp === 0) {
        return 1;
    }

    if (exp % 2 === 0) {
        let subAnsw = exponent(base, exp / 2);
        console.log(`MOD 2::::  base: ${base}; exp: ${exp / 2}; subAnsw: ${subAnsw}; finalAnsw: ${subAnsw ** 2}`);
        return subAnsw ** 2;
    } else {
        let subAnsw = exponent(base, (exp - 1) / 2);
        console.log(`base: ${base}; exp: ${(exp - 1) / 2}; subAnsw: ${subAnsw}; finalAnsw: ${base * (subAnsw ** 2)}`);
        return base * (subAnsw ** 2 );
    }
}

// exponent(2, 10); // 1024


// exponent(base, exp) - considering the case where exp is negative number 
function exponent2(base, exp) {
    if (exp === 0) {
        return 1;
    }

    if (exp > 0) {
        return base * exponent2(base, exp - 1);
    } else {
        return 1.0 / base * exponent2(base, exp + 1);
    }
}

// exponent2(2, -2); // 0.25


// fibonacci(n) - receives an integer, n, and returns the first n Fibonacci numbers
function fibonacci(n) {
    if (n < 3) {
        return [0, 1].slice(0, n);
    }

    let arr = fibonacci(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

    return arr;
}

// fibonacci(5); // [ 0, 1, 1, 2, 3 ]



// deepDup(arr) - deep dup of an Array!
function deepDup(arr) {
    if (!(arr instanceof Array)) {
        return arr;
    }
    return arr.map((el) => {
        return deepDup(el);
    });
}

// const array = [[2], 3];
// const dupedArray = deepDup(array);
// console.log(`deepDup original = ${JSON.stringify(array)}`);

// dupedArray[0].push(4);

// console.log(`deepDup original = ${JSON.stringify(array)} (should not be mutated)`);
// console.log(`deepDup duped = ${JSON.stringify(dupedArray)} (should be mutated)`);



// bsearch(arr, target) - receives a sorted array, returns the index of the target or - 1 if not found

function bsearch(arr, target) {
    if (arr.length === 0) {
        return -1;
    }

    let midIdx = Math.floor(arr.length / 2);

    if (target === arr[midIdx]) {
        return midIdx;
    } else if (target < arr[midIdx]) {
        const left = arr.slice(0, midIdx);
        return bsearch(left, target);
    } else {
        const right = arr.slice(midIdx + 1);
        const fakeIdx = bsearch(right, target);

        return fakeIdx === -1 ? -1 : fakeIdx + midIdx + 1;
    }
}

// console.log(`bsearch([1, 2, 3, 4, 5], 4) = ${bsearch([1, 2, 3, 4, 5], 4)}`);
// console.log(`bsearch([1, 2, 3], 5) = ${bsearch([1, 2, 3], 5)}`);



// mergesort(arr) - receives an array, 
// returns a sorted copy of the array by implementing merge sort sorting algorithm

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    const pivot = Math.floor(array.length / 2);

    const sortedLeft = mergeSort(array.slice(0, pivot));
    const sortedRight = mergeSort(array.slice(pivot));

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const merged = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            let ele = left.shift();
            merged.push(ele);
        } else {
            let ele = right.shift();
            merged.push(ele);
        }
    }

    return merged.concat(left, right);
}

// console.log(`mergeSort([4, 5, 2, 3, 1]) = ${mergeSort([4, 5, 2, 3, 1])}`);
// merge([5, 7], [1, 2, 3, 6])


// subsets(arr) - receives an array, returns an array containing all the subsets of the original array
function subsets(arr) {
    if (arr.length < 1) {
        return [[]];
    }

    const lastIdx = arr.length - 1;

    const previousSubs = subsets(arr.slice(0, lastIdx));
    const nextSubs = previousSubs.map(ele => ele.concat(arr[lastIdx]));

    console.log(`previousSubs: ${previousSubs}; array.last:  ${arr[lastIdx]}; nextSubs: ${nextSubs}`);

    return previousSubs.concat(nextSubs);
}


// subsets([]) /* [[]] */
// subsets([1]) /* [[], [1]] */
// subsets([1, 2]) /*  [[], [1], [2], [1, 2]] */
// subsets([1, 2, 3]) /*  [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] */

