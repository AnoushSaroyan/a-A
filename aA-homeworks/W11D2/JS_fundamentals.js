// Part 1

// Phase I
// mystery scoping

// function mysteryScoping1() {
//     var x = 'out of block';
//     if (true) {
//         var x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// mysteryScoping1(); // in block, in block

// function mysteryScoping2() {
//     const x = 'out of block';
//     if (true) {
//         const x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// mysteryScoping2(); // in block, out of block

// function mysteryScoping3() {
//     const x = 'out of block';
//     if (true) {
//         var x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// mysteryScoping3(); // SyntaxError

// function mysteryScoping4() {
//     let x = 'out of block';
//     if (true) {
//         let x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// mysteryScoping4(); // in block, out of block

// function mysteryScoping5() {
//     let x = 'out of block';
//     if (true) {
//         let x = 'in block';
//         console.log(x);
//     }
//     let x = 'out of block again';
//     console.log(x);
// }

// mysteryScoping5(); // SyntaxError

// madLib

function madLib(verb, adj, noun) {
    return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
}

madLib('make', 'best', 'guac');

// isSubstring

function isSubstring(phrase, subphrase) {
    return phrase.includes(subphrase);
}

// isSubstring("time to program", "time");

// Phase II

// fizzBuzz

function fizzBuzz(array) {
    const fizzBuzzArr = [];

    array.forEach(el => {
        if ((el % 3 === 0) ^ (el % 5 === 0)) {
            fizzBuzzArr.push(el);
        }
    });

    return fizzBuzzArr;
}

// fizzBuzz([50, 3, 15, 30, 5])

// isPrime

function isPrime(n) {
    if (n < 2) { return false; }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// isPrime(15485863);

// sumOfNPrimes

function sumOfNPrimes(n) {
    let sum = 0;
    let countPrimes = 0;
    let i = 2;

    while (countPrimes < n) {
        if (isPrime(i)) {
            sum += i;
            countPrimes++;
        }
        i++;
    }

    return sum;
}

// sumOfNPrimes(4);


// Part 2

function titleize(names, callback) {
    let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
    callback(titleized);
};

// call
// titleize(["Mary", "Brian", "Leo"], (names) => {
//     names.forEach(name => console.log(name));
// });

// Phase II - Constructors, Prototypes, and `this`

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
    this.height = this.height + 12;
};

Elephant.prototype.addTrick = function (trick) {
    this.tricks.push(trick);
};

Elephant.prototype.play = function () {
    trickIndex = Math.floor(Math.random() * this.tricks.length);
    console.log(`${this.name} is ${this.tricks[trickIndex]}!`);
};

// call
// let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
// let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
// let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
// let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

// let herd = [ellie, charlie, kate, micah];

// Phase III - Function Invocation

Elephant.paradeHelper = function (elephant) {
    console.log(`${elephant.name} is trotting by!`);
};

// Elephant.paradeHelper(micah);


// Phase IV - Closures

function dinerBreakfast() {
    let order = "I'd like cheesy scrambled eggs please.";
    console.log(order);

    return function (food) {
        order = `${order.slice(0, order.length - 8)} and ${food} please.`;
        console.log(order);
    };
};

// call
// let bfastOrder = dinerBreakfast();
// bfastOrder("chocolate chip pancakes");
// bfastOrder("grits");