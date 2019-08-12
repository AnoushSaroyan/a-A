function MovingObject(params) {
    this.pos = params.pos;
    this.vel = params.vel;
    this.radius = params.radius;
    this.color = params.color;
}

MovingObject.prototype.draw = function draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath(); // begins a path, or resets the current path

    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0, // start angle
        2 * Math.PI, // end angle
        false // counterclockwise or clockwise
    );

    ctx.fill(); // to actually draw the arc
};

MovingObject.prototype.move = function move(delta) {
    // ToDo: later
    // s = v*t
    
    this.pos = [
        this.pos[0] + this.vel[0] * delta / 20, 
        this.pos[1] + this.vel[1] * delta / 20
    ];
};

module.exports = MovingObject;