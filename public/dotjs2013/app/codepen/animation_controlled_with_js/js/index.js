(function (window, document) {
  "use strict";
  
  var el = document.querySelector('.dotjs'),
      clone;
  
  function resetAnimation() {
    // Clone the element
    clone = el.cloneNode(true);
    // Replace the element with the clone
    el.parentNode.replaceChild(clone, el);
    // The clone is the new element
    el = clone;
    // Add an event handler
    el.addEventListener('click', function() {
      resetAnimation();
    }, false);
  }
  
  resetAnimation();

}(this, document));