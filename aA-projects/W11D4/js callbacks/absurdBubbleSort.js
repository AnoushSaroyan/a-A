console.log('it doesn\'t look that good to me');

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`${el1} and ${el2}. Is first number greater?`, function (answer) {
        if (answer === "yes") {
            callback(true);
        } else {
            callback(false);
        }
    });
}

// askIfGreaterThan(3, 2, isGreaterThan => {
//   console.log(`Calling askIfGreaterThan ${isGreaterThan}`);
// });

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1) {
        console.log("before askIfGreaterThan");
        askIfGreaterThan(arr[i], arr[i + 1], isGreaterThan => {
            if (isGreaterThan) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                console.log(arr);
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
        });
    } else {
        outerBubbleSortLoop(madeAnySwaps);
        return;
    }
}
// array = [7,6,5,4,3,2,1];
// innerBubbleSortLoop(array, 0, false, outerBubbleSortLoop => {
//     console.log(`calling innerBubbleSortLoop array: ${array} `);
// });

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
          innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
    }
    // Kick the first outer loop off, starting `madeAnySwaps` as true.
    outerBubbleSortLoop(true);
}

absurdBubbleSort([4, 3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});