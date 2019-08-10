class MovingObject {
    constructor(name, speed, size) {
        this.name = name;
        this.speed = speed;
        this.size = size;
    }

    move() {
        console.log("WOW, I CAN MOVE IT");
    }
}

MovingObject.prototype.spin = function () {
    console.log("LOOK, I CAN SPIN");
}


module.exports = MovingObject;
