var MovingObject = require("./movingObject.js");
var inherit = require("./inherit.js");


class Asteroid {
    constructor(name, composition, axis) {
        this.name = name;
        this.composition = composition;
        this.axis = axis;
    }
}

Asteroid.prototype.hurdle = () => {
    console.log(`HURDLING AT ${axis} axis...`)
}

inherit(MovingObject, Asteroid);


module.exports = Asteroid;