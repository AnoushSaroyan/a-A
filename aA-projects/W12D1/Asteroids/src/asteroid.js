const MovingObject = require("./moving_object");
const Util = require("./util.js");

const COLOR = "gray";
const RADIUS = 20;

function Asteroid(params) {
    // game is given in the params
    params.color = COLOR;
    params.radius = RADIUS;
    params.vel = params.vel || Util.randomVec(3);
    params.pos = params.pos || params.game.randomPos();

    MovingObject.call(this, params);
}

Util.inherit(MovingObject, Asteroid);

module.exports = Asteroid;