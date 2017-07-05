const validate = function () {
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

