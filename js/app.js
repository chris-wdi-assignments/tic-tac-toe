const board = $('#board');

let turn = 'x'; // x always goes first

const reset = () => {
  turn = 'x'; // x goes first
  board.children('.square').each(() => $(this).text(''));
};

const play = (el) => {
  $el = $(el);  // just query the element once
  contents = $el.text();
  if (contents === 'x' || contents === 'o') return null;
  $el.text(turn);
  if (turn === 'x') turn = 'o';
  else if (turn === 'o') turn = 'x';
  else throw new Error(`turn is ${turn}, not known!`);
};

// wait for the DOM to finish loading

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  $('#board').on('click', function (e) {
    play(e.target);
  });
});
