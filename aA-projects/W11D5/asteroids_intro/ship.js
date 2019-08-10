var MovingObject = require("./movingObject.js");
var inherit = require("./inherit.js");

class Ship {
    constructor(name, pilot) {
        this.name = name;
        this.pilot = pilot;
    }
}

Ship.prototype.thrusters = function () {
    console.log("INITIATE THRUSTERSSSS")
}

Ship.prototype.ejectPilot = () => {
    console.log(`ALERT: PREPARE FOR EJECTION. GOODBYE ${this.pilot}!!`)
}

inherit(MovingObject, Ship);

module.exports = Ship;