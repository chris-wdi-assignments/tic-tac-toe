const board = $('#board');

const turn = 'x'; // x always goes first

const reset = () => {
  turn = 'x'; // x goes first
  board.children('.square').each(() => $(this).text(''));
};

// wait for the DOM to finish loading

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  $('#board').on('click', function (e) {
    play(e.target);
  });
});
