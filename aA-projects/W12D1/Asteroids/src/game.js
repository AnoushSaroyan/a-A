const Util = require("./util.js");
const Asteroid = require("./asteroid.js");
const Bullet = require("./bullet.js");
const Ship = require("./ship.js");

function Game() {
    this.asteroids = [];
    this.bullets = [];
    this.ships = [];

    this.addAsteroids();
}

Game.DIM_X = 1000;
Game.DIM_Y = 700;
Game.NUM_ASTEROIDS = 200;

Game.prototype.addAsteroids = function addAsteroids() {
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({ game: this }));
    }
};

Game.prototype.randomPos = function randomPos() {
    // Util.scale([Game.DIM_X, Game.DIM_Y], Math.random());
    return [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()];
};

Game.prototype.draw = function draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y); // x-coord of upper left, y-coord of upper left, width, height
    // call draw method for every object: MovingObject
    const objects = this.asteroids.concat(this.bullets, this.ships);

    objects.forEach(object => object.draw(ctx));
};

Game.prototype.moveObjects = function moveObjects(delta) {
    // move every object
    const objects = this.asteroids.concat(this.bullets, this.ships);
    
    // delta = delta || 1;
    objects.forEach(object => object.move(delta));
};

module.exports = Game;