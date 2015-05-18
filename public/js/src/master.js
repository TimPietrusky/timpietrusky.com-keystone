// Main navigation
var navigation = new Navigation();





// Highlight.js
// 
// At least one <code> element is on the page
if (document.getElementsByTagName('code').length > 0) {
  hljs.initHighlighting();
}





var myLoader = new LazyLuke({
  elements : '[data-js-src]',
  srcAttribut : 'data-js-src'
});