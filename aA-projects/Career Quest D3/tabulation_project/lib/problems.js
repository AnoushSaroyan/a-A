// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end

// tabulation
function stepperTabulation(nums) {
    let table = new Array(nums.length).fill(false);
    table[0] = true; // [true]

    for (let i = 0; i < table.length; i++) {
        if (table[i] === true) {
            let maxRange = nums[i];
            for (let j = 1; j <= maxRange; j++) {
                table[j] = true; // [true, true, true, true]
            }
        }
    }

    return table[table.length - 1];
}

// memoization
function stepper(nums, memo={}) {
    // let key = String(nums);
    if (nums.length in memo) return memo[nums.length];
    if (nums.length === 0) return true;

    let maxRange = nums[0];
    for (let step = 1; step <= maxRange; step++) {
        if (stepper(nums.slice(step), memo)) {
            memo[nums.length] = true;
            return true; // if the children return true then return true for the parent call
        }
    } 

    memo[nums.length] = false;
    return false
}


// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6 
function maxNonAdjacentSumTabulation(nums) {
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums);

    let arr = [nums[0], Math.max(nums[0], nums[1])]; 

    for (let i = 2; i < nums.length; i++) {
        arr.push(Math.max(nums[i] + arr[i - 2], arr[i - 1]))
    }

    return arr[arr.length - 1];
}

// memoization
function maxNonAdjacentSum(nums, memo={}) { 
    if (nums.length in memo) return memo[nums.length];
    if (nums.length === 0) return 0;

    memo[nums.length] = Math.max(
        nums[0] + maxNonAdjacentSum(nums.slice(2), memo), // leave all eles but the first two
        maxNonAdjacentSum(nums.slice(1), memo) // leave all eles but the first one
    );

    return memo[nums.length];
}


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100

// this is a minimization problem, remember from you math classes, lolz
function minChange(coins, amount) {
    // fills with Infinity by default, because any number that we found will be a better choise than the infinity
    let table = new Array(amount + 1).fill(Infinity); // +1 to store the base case too, amount = 0, return 0

    table[0] = 0; // key represents the amount of a particular coin 
        // and the value at that key represents the quantity needed to get the desired target

    coins.forEach(value => {
        for (let amt = 0; amt < table.length; amt++) {
            for (let qty = 0; qty * value <= amt; qty++) {
                let remainder = amt - qty * value;
                let attempt = table[remainder] + qty;

                if (attempt < table[amt]) table[amt] = attempt; 
            }
        }
    });

    return table[table.length - 1];
}


module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};