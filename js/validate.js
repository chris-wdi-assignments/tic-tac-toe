// this logic will work on any larger, symmetrical matrices

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
  let value = null;
  for (let col = 0; col < matrix[0].length; col++) {
    // this assumes all elements in matrix array are of equal length
    value = matrix[0][col]; // initialize value so first comparison works
    for (let row = 1; row < matrix.length; row++) {
      // start from 1 since we compare with previous
      if (matrix[row][col] === value) {
        value = matrix[row][col]; // even if we're tracking empty squares
                                      // that's ok, we still won't get win
      } else {  // if no match this isn't a winning column
        value = null;
      }
    }
    if (value) {  // if we made it through and non-null, this is winner
      return value;
    }
  }
  // if we made it through all columns without returning, no winner
  return null;
};

const dWin = function (matrix) {
  // basically two cases, iterating first top to bottom then bottom to top
  // assumes matrix is symmetrical
  let value = matrix[0][0]; // init value so first comparison works
  for (let i = 1; i < matrix.length; i++) {
    // we start counting from 1 since we compare w/previous element
    if (matrix[i][i] === value) {
      value = matrix[i][i];
    } else {
      value = null;
    }
  }
  if (value) {
    return value;
  }
  // ok, now check other diagonal
  bottomRowIndex = matrix.length - 1; // this is our y-coord to start from
  value = matrix[bottomRowIndex][0]; // start from bottom left
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[bottomRowIndex - i][i] === value) {
      value = matrix[bottomRowIndex - i][i];
    } else {
      value = null;
    }
  }
  return value; // no need to test
};

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

