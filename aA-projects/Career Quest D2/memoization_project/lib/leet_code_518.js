// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

function change(amount, coins, memo = {}) {
    let key = amount + "-" + coins; // in memo you specifies all the args that effect the output 

    if (key in memo) return memo[key];
    if (amount === 0) return 1; // one way to give them a change, give them 0 

    let current = coins[coins.length - 1];

    let total = 0;
    for (let qty = 0; qty * current <= amount; qty++) {
        total += change(amount - qty * current, coins.slice(0, -1), memo);
    }

    memo[key] = total;
    return memo[key];
}

// module.exports = {
//     change,
// }

console.log(change(500, [3, 5, 7, 8, 9, 10, 11]));

