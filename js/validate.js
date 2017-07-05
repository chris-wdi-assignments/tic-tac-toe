// this logic will also work on larger matrices

const hWin = function (matrix) {
  // will return either name of winner or null of none found
  let winnerWasFound = false;
  matrix.forEach(function (row) { // an array holding one row is received
    if (winnerWasFound) {
      return;
    }
    let reduction = row.reduce(function (lastElement, currentElement) {
      // this .reduce() will either return the name of winner if all are same,
      // or else null
      if (currentElement === lastElement) {
        return currentElement;  // if both are null, conveniently returns null
      }
      else {
        return null;
      }
    });
    if (reduction) {
      winnerWasFound = reduction;
    }
  })
  if (winnerWasFound) {
    console.log('HWin!');
    return winnerWasFound;
  }
}

const vWin = function (matrix) {
  let winnerWasFound = false;
  let lastValue = null;
  for (let col = 0; col < matrix[0].length; col++) {
    // this assumes all elements in matrix array are of equal length
    for (let row = 1; row < matrix.length; row++) {
      // start from 1 since we compare with previous
      if (matrix[row][col] === matrix[row - 1][col]) {
        lastValue = matrix[row][col]; // even if we're tracking empty squares
                                      // that's ok, we still won't get win
      } else {  // if no match this isn't a winning column
        lastValue = null;
      }
    }
    if (lastValue) {  // if we made it through and non-null, this is winner
      return lastValue;
    }
  }
  // if we made it through all columns without returning, no winner
  return null;
};

const dWin = function () {};

const validate = function () {
  // will return either 'x' if player x won, 'o' if o won, 'draw' if draw, or
  // null if game is still going
  let matrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  let numOfPlays = 0;

  $('.square').each(function (i, el) {  // populate matrix from DOM
    let row = Math.floor(i / 3);
    let col = i % 3;
    let contents = $(el).text();
    if (contents === '') {
      contents = null;  // this helps logic later
    }
    matrix[row][col] = $(el).text();
    console.log(contents);
    if (contents) {
      numOfPlays++;
    }
  });
  console.log(matrix);

  let hasHorizontalWin = hWin(matrix);
  if (hasHorizontalWin) return hasHorizontalWin;

  let hasVerticalWin = vWin(matrix);
  if (hasVerticalWin) return hasVerticalWin;

  let hasDiagonalWin = dWin(matrix);
  if (hasDiagonalWin) return hasDiagonalWin;

  if (numOfPlays === 9) {
    return 'draw';
  }
};

