'use strict';
  
// Constructor
function LazyLuke(args) {
  this.w = window;
  this.d = window.document;
  
  // Elements
  this.elements = this.d.querySelectorAll(args.elements);
  
  // The String to select the elements
  this.elementSelector = args.elements;
  
  // Attribute to get the src
  this.srcAttribut = args.srcAttribut;
  
  // The reference to the handler called in the listener
  this.listenerHandlerReference = null;
  
  // Add scroll listener
  this.addListener();

  // Load the elements on page load
  this.load();
};

// Override prototype
LazyLuke.prototype = {
  
  
  
  // Set correct constructor
  constructor : LazyLuke,
  
  
  
  // Returns "true" if "el" is visible inside the current viewport.
  // @see http://stackoverflow.com/a/7557433/1012875
  isVisible : function(el) {
    var r = el.getBoundingClientRect();

    return (
      r.top >= 0 &&
      r.left >= 0 &&
      r.top <= (this.w.innerHeight || this.d.documentElement.clientHeight) &&
      r.right <= (this.w.innerWidth || this.d.documentElement.clientWidth) 
    );
  },
  
  
  
  // Load the elements if they are visible and not loaded yet
  load : function() {
    
    // There are still elements to load
    if (this.d.querySelectorAll(this.elementSelector).length > 0) {
      
      for (var i = 0; i < this.elements.length; i++) {
        var el = this.elements[i];
        
        // The element was not loaded and is not visible
        if (el.getAttribute(this.srcAttribut) !== null && this.isVisible(el)) {

          // Element is an iframe
          if (el.tagName === "IFRAME") {

            // Element src is empty
            if (el.src === "about:blank") {
              // Get the value of "data-js-src" and use it as the new src
              el.src = el.getAttribute(this.srcAttribut);
              // Remove the attribute from the element
              el.removeAttribute(this.srcAttribut);
            } 

          } // IFRAME

        } // isVisible

      } // for

    // Every element was loaded
    } else {
      // Remove the listener
      this.removeListener();
    }
    
  },
  
  
  
  // Add listener
  addListener : function() {
    this.listenerHandlerReference = this.load.bind(this);
    this.d.addEventListener('scroll', this.listenerHandlerReference, false);
  },
  
  
  
  // Remove listener
  removeListener : function() {
    this.d.removeEventListener('scroll', this.listenerHandlerReference, false);
  }
  
}; // LazyLuke