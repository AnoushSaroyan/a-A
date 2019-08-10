// Defines a function, _curriedSum that:

// Closes over numArgs and args.
// Takes a single number as an argument.
// Appends this to args each time.
// If args.length === numArgs, it sums the args in the array and returns the result.
//     Else, it returns itself.

// Returns _curriedSum.
function curriedSum(numArgs) {
    const args = [];

    function _curriedSum(num) {
        args.push(num);

        if (args.length === numArgs) {
            let total = 0;
            args.forEach( number => total += number);

            return total;
        } else if (args.length < numArgs){
           return _curriedSum;
        } else {
            throw new Error("Wrong num of args");
        }
    }

    return _curriedSum;
}


const sum = curriedSum(4);
console.log(sum(5)(30)(20)(10)(6)); // => 56;



// FUNCTION.PROTOTYPE VERSION
Function.prototype.curry_spread = function(numArgs) {
    const args = [];
    const that = this;

    function _curriedSum(num) {
        args.push(num)
        if (args.length === numArgs) {
            // let total = 0;
            // args.forEach(number => total += number)
            return that(...args); 
        } else if (args.length < numArgs) {
            return _curriedSum;
        } else {
            throw new Error("Wrong num of args");
        }
    }

    return _curriedSum;
}

function sum(arg1, arg2, arg3, arg4) {
    return arg1 + arg2 + arg3 + arg4;
}

const curry = sum.curry_spread(4); // that is sum there

// console.log(sum(5)(30)(20)(1)); // => 56;


// FUNCTION.PROTOTYPE.APPLY VERSION
Function.prototype.curry_apply = function (numArgs) {
    const args = [];
    const that = this;

    function _curriedSum(num) {
        args.push(num)
        if (args.length === numArgs) {
            // let total = 0;
            // args.forEach(number => total += number)
            return that.apply(null, args);
        } else if (args.length < numArgs) {
            return _curriedSum;
        } else {
            throw new Error("Wrong num of args");
        }
    }
    return _curriedSum;
}

function sum(arg1, arg2, arg3, arg4) {
    return arg1 + arg2 + arg3 + arg4;
}
const curry = sum.curry_apply(4); // that is sum there
curry(1);



// ... SPREAD VERSION