var Masonry = require('masonry-layout');

// Places elements in optimal position based on available vertical space
function callMasonry() {
  new Masonry('div.page-content', {
    itemSelector: 'div.product',
    columnWidth: 'div.product'
  });
}

module.exports = callMasonry;