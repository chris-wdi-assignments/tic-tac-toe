// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  $('#board').on('click', function (e) {
    console.log(e.target);
    $(e.target).text('O');
  });
});
