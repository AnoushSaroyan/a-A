const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js")

window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
    const canvasEle = document.getElementById("game-canvas");
    const ctx = canvasEle.getContext("2d");
    const game = new Game();
    // const asteroid = new Asteroid({ pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00" });
    // const asteroid = new Asteroid({ game: game });
    // asteroid.draw(ctx); 
    canvasEle.width = Game.DIM_X;
    canvasEle.height = Game.DIM_Y;
    // game.draw(ctx);
    const gameView = new GameView(game, ctx);
    gameView.start();
});

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;  