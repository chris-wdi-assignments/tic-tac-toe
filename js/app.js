
let turn = 'x'; // x always goes first

const reset = function () {
  turn = 'x'; // x goes first
  $('.square').each(function () {
    $(this).text('');
  });
  $('.turn-x').addClass('turn-active');
  $('.turn-y').removeClass('turn-active');
};

const updatePlayer = function () {
  if (turn === 'x') turn = 'o';
  else if (turn === 'o') turn = 'x';
  else {  // this should never happen
    throw new Error(`turn === ${turn}, not known!`);
  }
  $('.turn-indicator').toggleClass('turn-active');  // update indicator
};

const play = function (jsEvent) {  // user clicked a square...
  if (!turn) return;  // if game over it must be reset to play
  $el = $(jsEvent.target);  // just query the element once
  contents = $el.text();  // let's read what the square says...
  if (contents === 'x' || contents === 'o') {
    return;  // if this square has already been played do nothing
  }
  $el.text(turn); // else fill in square with whoever's turn it is

  updatePlayer();
  
  let result = validate();
  if (result) { // if we have a game ending condition
    turn = null;
    // open modal with game result
    alert(`${result} won!`);
  }
};

// function validate () {} // declared in validate.js

// wait for the DOM to finish loading

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  $('#board').on('click', play);
  $('#reset').on('click', reset);
  $('#validate').on('click', validate);

  reset();
});
