var $ = require('jquery');
var Masonry = require('masonry-layout');

$(document).ready(function () {
  //Constants and DOM elements
  var YELLOW_STAR = '<span class="yellow-star"></span>';
  var WHITE_STAR = '<span class="white-star"></span>';
  var loadMoreButton = $('#load-more-button');
  var pageContentContainer = $('div.page-content');
  var collapsedMenuIcon = $('#collapsed');
  var sidenav = $('#sidenav');
  var mainNav = $('div.nav');

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
    var pageContentWidth = $('main').width() - MIN_PADDING;

    var columns = parseInt(pageContentWidth / BLOCK_WIDTH);
    var padding = parseInt((pageContentWidth - columns * BLOCK_WIDTH)/2 + MIN_PADDING/2);

    pageContent.css('padding', '60px ' + padding + 'px 45px');
  }

  //Creates (clones existing) products for "Load more" button click
  function getProducts() {
    return pageContentContainer.children().filter(function (index) {
      return index < 8
    }).clone()
  }

  //Creates animated loader
  function setLoader() {
    loadMoreButton.children('p').css('visibility', 'hidden');
    loadMoreButton.addClass('loader');
  }

  //Removes animated loader
  function hideLoader() {
    loadMoreButton.children('p').css('visibility', 'visible');
    loadMoreButton.removeClass('loader');
  }

  // Places elements in optimal position based on available vertical space
  function callMasonry() {
    new Masonry('div.page-content', {
      itemSelector: 'div.product',
      columnWidth: 'div.product'
    });
  }

  //Initializes page layout
  calculatePadding();
  appendRating();
  callMasonry();

  // Event handlers
  $(window).resize(function() {
    calculatePadding();
  });

  //Simulates ajax request
  loadMoreButton.click(function () {
    var products = getProducts();

    setLoader();

    setTimeout(function () {
      pageContentContainer.append(products);
      hideLoader();
      calculatePadding();
      callMasonry();
    }, 1000);
  });

  //Show and hides sidebar navigation
  collapsedMenuIcon.click(function () {
    sidenav.css('width', '250px');
  });

  sidenav.children('a').click(function () {
    sidenav.css('width', '0');
  });

  //Makes sticky navigation bar
  $(window).scroll(function () {
    var position = $(window).scrollTop();

    if (position > 503) {
      mainNav.addClass('fixed-nav');
    } else {
      mainNav.removeClass('fixed-nav');
    }
  });

});