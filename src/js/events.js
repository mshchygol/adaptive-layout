var $ = require('jquery');
var utils = require('./utils');
var masonry = require('./masonry');

//Constants and DOM elements
var loadMoreButton = $('#load-more-button');
var pageContentContainer = $('div.page-content');
var collapsedMenuIcon = $('#collapsed');
var sidenav = $('#sidenav');
var mainNav = $('div.nav');

// Event handlers
$(window).resize(function() {
  utils.calculatePadding();
});

//Simulates ajax request
loadMoreButton.click(function () {
  var products = utils.getProducts();

  utils.setLoader();

  setTimeout(function () {
    pageContentContainer.append(products);
    utils.hideLoader();
    utils.calculatePadding();
    masonry();
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