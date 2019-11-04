// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (array[idx] === undefined) return true;
    let leftIdx = idx * 2;
    let rightIdx = idx * 2 + 1;
    let rightVal = array[rightIdx] === undefined ? -Infinity : array[rightIdx];
    let leftVal = array[leftIdx] === undefined ? -Infinity : array[leftIdx];

    let result = array[idx] > rightVal && array[idx] > leftVal;
    return result && isMaxHeap(array, rightIdx) && isMaxHeap(array, leftIdx);
}


module.exports = {
    isMaxHeap
};