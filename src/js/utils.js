var $ = require('jquery');

//Constants and DOM elements
var loadMoreButton = $('#load-more-button');
var pageContentContainer = $('div.page-content');

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

module.exports = {
  calculatePadding: calculatePadding,
  getProducts: getProducts,
  setLoader: setLoader,
  hideLoader: hideLoader
};