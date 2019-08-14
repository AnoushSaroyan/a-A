const View = require("./ttt-view");// require appropriate file
const Game = require("../../tic_tac_toe_node_solution/game.js");// require appropriate file

  $(() => {
    const game = new Game();
    const $ttt = $(".ttt");
    const view = new View(game, $ttt);
  });
