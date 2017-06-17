var $ = require('jquery');
var Masonry = require('masonry-layout');

var masonry = new Masonry('div.page-content', {
  itemSelector: 'div.product',
  columnWidth: 'div.product'
});

$(document).ready(function () {

  console.log('jquery')

});