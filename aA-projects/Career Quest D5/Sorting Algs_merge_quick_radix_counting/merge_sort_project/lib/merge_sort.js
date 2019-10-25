function merge(left, right) {
    let merged = [];

    while (left.length || right.length) {
        let eleLeft = left.length ? left[0] : Infinity;
        let eleRight = right.length ? right[0] : Infinity;

        let next;
        if (eleLeft < eleRight) {
            next = left.shift();
        } else {
            next = right.shift();
        }

        merged.push(next);
    }

    return merged;
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx);

    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}

module.exports = {
    merge,
    mergeSort
};