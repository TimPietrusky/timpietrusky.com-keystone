var Navigation = require("./components/navigation.js");
var LazyLuke = require("./components/lazyluke.js");
var disqusLoader = require("./components/disqus.js");




/**
 * Enable HTML5
 */
'article aside footer header nav section time'.replace(/\w+/g,function(n){document.createElement(n)});



/**
 * Google analytics
 */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-5596313-1', 'auto');
ga('send', 'pageview');



/**
 * Load disqus
 */
new disqusLoader();



// Main navigation
var navigation = new Navigation();


/**
 * HighlightJS
 */
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