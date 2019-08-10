// Write a sum function that takes any number of arguments:

// sum(1, 2, 3, 4) === 10
// sum(1, 2, 3, 4, 5) === 15

// Solve it first using the arguments keyword, then rewrite 
// your solution to use the ...rest operator.

// REGULAR SUM
function sum(arr) {
    let total = 0;
    for(i=0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}


// ...SUM SPREAD
function sumSpread(...nums) {
    let total = 0;
    for(i=0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}
sumSpread(1, 2, 3, 4)


// bind with args
// Rewrite your myBind method so that it can take both bind - time arguments 
// and call - time arguments.
class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

Function.prototype.myBind = function (param) {
    const that = this;
    return function () {
        const boundArgs = Array.from(arguments);
        return that.apply(param, boundArgs);
    }
}
markov.says.myBind(pavlov)("meow", "a tree");



// arguments Array.
// pavlov.apply()
// markov.apply(params).pavlov

// 1. capture this, that = this
// 2. slicing the args 
// 3. anon func  
// 3. a. get the args again
// 3. b. call the apply pants.apply()

// markov.call(pavlov, ["meow", "Kush"])

// REST OPERATOR VERSION

Function.prototype.myBind = function (context, ...boundArgs) {
    const that = this;
    return function () {
        return that.apply(context, boundArgs);
    }
}
markov.says.myBind(pavlov, "meow", "Kush")();

