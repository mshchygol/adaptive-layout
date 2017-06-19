var $ = require('jquery');
var Masonry = require('masonry-layout');

$(document).ready(function () {
  console.log('jquery');

  var yellowStar = '<img src="./img/yellow-star.png" class="yellow-star">';
  var whiteStar = '<img src="./img/white-star.png" class="white-star">';

  function fiveStars() {
    var i = 0;
    var images = '';
    while (i < 5) {
      images += yellowStar;
      i++;
    }
    return images;
  }

  function fourStars() {
    var i = 0;
    var images = '';
    while (i < 4) {
      images += yellowStar;
      i++;
    }
    return images + whiteStar;
  }

  function threeStars() {
    var i = 0;
    var images = '';
    while (i < 3) {
      images += yellowStar;
      i++;
    }
    return images + whiteStar + whiteStar;
  }

  function twoStars() {
    var i = 0;
    var images = '';
    while (i < 2) {
      images += yellowStar;
      i++;
    }

    while (i < 5) {
      images += whiteStar;
      i++;
    }

    return images;
  }

  function oneStar() {
    var i = 0;
    var images = '';
    while (i < 4) {
      images += whiteStar;
      i++;
    }

    return yellowStar + images;
  }



  function appendRating() {
    $('.five').append(fiveStars());
    $('.four').append(fourStars());
    $('.three').append(threeStars());
    $('.two').append(twoStars());
    $('.one').append(oneStar());
  }

  appendRating();

  var masonry = new Masonry('div.page-content', {
    itemSelector: 'div.product',
    columnWidth: 'div.product'
  });

});