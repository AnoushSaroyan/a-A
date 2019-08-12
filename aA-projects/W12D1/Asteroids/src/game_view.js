function GameView(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.lastTime = 0;
}

GameView.prototype.start = function start() {
    // setInterval(() => {
    //     this.game.moveObjects(20);
    //     this.game.draw(this.ctx);
    // }, 1000);
    requestAnimationFrame(this.draw.bind(this));
};

GameView.prototype.draw = function draw(currentTime) {
    const delta = currentTime - this.lastTime;

    this.game.moveObjects(delta);
    this.game.draw(this.ctx);
    this.lastTime = currentTime;
    
    requestAnimationFrame(this.draw.bind(this));
};

module.exports = GameView;