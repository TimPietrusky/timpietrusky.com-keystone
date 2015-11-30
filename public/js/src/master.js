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



// var content_elements = document.querySelectorAll('[data-js="element"]');

// // There are content elements on the current page
// if (content_elements.length > 0) {

//   for (var i = 0; i < content_elements.length; i++) {
//     content_elements[i].addEventListener(
//       'click',
//       function(e) {
//         e.preventDefault();
//       },
//       false
//     );

//   };
// }