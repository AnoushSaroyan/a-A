class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {

    this.el.on("click", "li", e => {
      const $square = $(e.currentTarget);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    const pos = $square.data("pos");
    const currentPlayer = this.game.currentPlayer;
    
    try {
      this.game.playMove(pos);
    } catch(e) {
      alert(e.msg);
      return;
    }
    
    $square.text(currentPlayer);
    $square.addClass(currentPlayer);

    if (this.game.isOver()) {
      this.el.addClass("game-over");
      this.el.off("click");
      this.game.board.print();

      if (this.game.winner()) {
        const $h1 = $(`<h1></h1>`);
        this.el.addClass("winner" +"-" + this.game.winner());
        this.el.append($h1.html(`${this.game.winner()} has won!`));
      } 
    } 
  }

  setupBoard() {
    const $ul = $("<ul></ul>");
    const size = 3;

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const $li = $("<li></li>");
        $li.data("pos", [i, j])
        $ul.append($li);
      }  
    }

    this.el.append($ul);
  }
}

module.exports = View;
