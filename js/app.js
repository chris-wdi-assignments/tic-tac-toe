
let turn = 'x'; // x always goes first

const reset = () => {
  turn = 'x'; // x goes first
  $('.square').each(function () {
    $(this).text('');
  });
  $('.turn-x').addClass('turn-active');
  $('.turn-y').removeClass('turn-active');
};

const play = (el) => {
  if (!turn) return;  // if game over it must be reset to play
  $el = $(el);  // just query the element once
  contents = $el.text();
  if (contents === 'x' || contents === 'o') {
    return null;  // if this square has been played do nothing
  }
  $el.text(turn);
  if (turn === 'x') turn = 'o';
  else if (turn === 'o') turn = 'x';
  else throw new Error(`turn is ${turn}, not known!`);
  $('.turn-indicator').toggleClass('turn-active');
};

const validate = () => {
  // will return either 'x' if player x won, 'o' if o won, 'draw' if draw, or
  // null if game is still going
  let matrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  $('.square').each(function (i, el) {  // populate matrix from DOM
    let row = Math.floor(i / 3);
    let col = i % 3;
    matrix[row][col] = $(el).text();
  });
  console.log(matrix);
};

// wait for the DOM to finish loading

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  $('#board').on('click', function (e) {
    play(e.target);
  });
  $('#reset').on('click', () => reset());
  $('#validate').on('click', () => validate());

  reset();
});
