function binarySearch(array, target) {
    if (array.length === 0){
        return false;
    }

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx + 1);

    if (target < array[midIdx]){
        return binarySearch(leftHalf, target);
    } else if (target > array[midIdx]) {
        return binarySearch(rightHalf, target);
    } else {
        return true;
    }

}

function binarySearchIndex(array, target) {
    if (array.length === 0){
        return -1;
    }

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx + 1);
    
    if (target < array[midIdx]) {
        let leftIdx = binarySearchIndex(leftHalf, target);
        return leftIdx;
    } else if (target > array[midIdx]) {
        let prevIdx = binarySearchIndex(rightHalf, target);
        return prevIdx === -1? -1 : midIdx + 1 + prevIdx;
    } else {
        return midIdx;
    }

}


module.exports = {
    binarySearch,
    binarySearchIndex
};