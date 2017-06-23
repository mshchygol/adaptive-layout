var $ = require('jquery');
var rating = require('./rating');
var masonry = require('./masonry');
var utils = require('./utils');
var events = require('./events');

$(document).ready(function () {

  //Initializes page layout
  utils.calculatePadding();
  rating.appendRating();
  masonry();

});