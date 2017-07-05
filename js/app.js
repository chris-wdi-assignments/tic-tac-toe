
let turn = 'x'; // x always goes first

const reset = () => {
  turn = 'x'; // x goes first
  $('.square').each(function () {
    $(this).text('');
  });
  console.log('reset');
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

const validate = () => {
  // will return either 'x' if player x won, 'o' if o won, 'draw' if draw, or
  // null if game is still going
  $('.square').each(function (i, el) {
    $(el).text(i);
  })
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
