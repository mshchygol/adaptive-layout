var $ = require('jquery');

//Constants
var YELLOW_STAR = '<span class="yellow-star"></span>';
var WHITE_STAR = '<span class="white-star"></span>';

// Creates span elements with star background
function concatStars(amount) {
  var i = 0;
  var stars = '';

  while ( i < amount) {
    stars += YELLOW_STAR;
    i++;
  }

  while (i < 5) {
    stars += WHITE_STAR;
    i++;
  }

  return stars
}

// Inserts rating images to products list
function appendRating() {
  $('.five').append(concatStars(5));
  $('.four').append(concatStars(4));
  $('.three').append(concatStars(3));
  $('.two').append(concatStars(2));
  $('.one').append(concatStars(1));
}

module.exports = {
  appendRating: appendRating
};