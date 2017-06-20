var $ = require('jquery');
var Masonry = require('masonry-layout');

$(document).ready(function () {
  var YELLOW_STAR = '<img src="./img/yellow-star.png" class="yellow-star">';
  var WHITE_STAR = '<img src="./img/white-star.png" class="white-star">';

  // Creates img elements
  function fiveStars() {
    var i = 0;
    var images = '';
    while (i < 5) {
      images += YELLOW_STAR;
      i++;
    }
    return images;
  }

  // Creates img elements
  function fourStars() {
    var i = 0;
    var images = '';
    while (i < 4) {
      images += YELLOW_STAR;
      i++;
    }
    return images + WHITE_STAR;
  }

  // Creates img elements
  function threeStars() {
    var i = 0;
    var images = '';
    while (i < 3) {
      images += YELLOW_STAR;
      i++;
    }
    return images + WHITE_STAR + WHITE_STAR;
  }

  // Creates img elements
  function twoStars() {
    var i = 0;
    var images = '';
    while (i < 2) {
      images += YELLOW_STAR;
      i++;
    }
    while (i < 5) {
      images += WHITE_STAR;
      i++;
    }

    return images;
  }

  // Creates img elements
  function oneStar() {
    var i = 0;
    var images = '';
    while (i < 4) {
      images += WHITE_STAR;
      i++;
    }

    return YELLOW_STAR + images;
  }

  // Inserts rating images to products list
  function appendRating() {
    $('.five').append(fiveStars());
    $('.four').append(fourStars());
    $('.three').append(threeStars());
    $('.two').append(twoStars());
    $('.one').append(oneStar());
  }

  // Finds the best padding value for the main tag
  function calculatePadding() {
    var BLOCK_WIDTH = 300;
    var MIN_PADDING = 110;
    var pageContent = $('#main');
    var pageContentWidth = $('body').width() - MIN_PADDING;

    var columns = parseInt(pageContentWidth / BLOCK_WIDTH);
    var padding = parseInt((pageContentWidth - columns * BLOCK_WIDTH)/2 + MIN_PADDING/2);

    pageContent.css('padding', '60px ' + padding + 'px 45px');
  }

  calculatePadding();
  appendRating();

  // Places elements in optimal position based on available vertical space
  new Masonry('div.page-content', {
    itemSelector: 'div.product',
    columnWidth: 'div.product'
  });

  $(window).resize(function() {
    calculatePadding();
  });

});