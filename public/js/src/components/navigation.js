Navigation = (function() {
    
  function Navigation(args) {
    try {
      // Get the dropdown
      this.el = document.querySelector('[data-js="navigation"]');

      // Get child elements
      this.childs = this.el.querySelectorAll('ul > li');

      // Content
      this.contentArea = document.querySelector('[data-js="content"]');

      // Active category
      this.category_active = '';

      // Active element
      this.element_active = null;

      // Location object
      var _location = window.location,
          parameter_category = null;

      if (typeof _location.hash !== 'undefined') {
        parameter_category = _location.hash.split('#');
        parameter_category = parameter_category[1];
      }

      if (parameter_category != null) {

        // Save the active element
        this.element_active = document.querySelector('[data-js="navigation"] [data-category="'+parameter_category+'"]');

        // Add active attribute
        this.element_active.setAttribute('data-css', 'active');

        // Find elements to hide
        var elements = this.contentArea.querySelectorAll('[data-js="element"]:not([data-category="'+parameter_category+'"]');

        // Filter elements if the category is not blog (parent of all elements)
        if (parameter_category != "blog") {
          // Iterate over all elements and hide them
          for (var j = 0; j < elements.length; j++) {
            elements[j].setAttribute('data-css', 'hide');
          }
        }
      }

      // Iterate over all childs
      for (var i = 0; i < this.childs.length; i++) {

        // Listen to the click event
        this.childs[i].addEventListener('click', function(e) {
          // The clicked element
          var child = e.target;

          // Initial value for the active element
          this.element_active = this.element_active == null ? child : this.element_active;

          // Find the current category
          var category = child.getAttribute('data-category');

          // All elements
          var elements_all = this.contentArea.querySelectorAll('[data-js="element"]');



          // The currently selected category is not the same as the last active category
          // Turn the filter on
          if (category !== this.category_active && category !== null) {

            // Save the active category
            this.category_active = category;

            // Change the hash to the current category
            _location.hash = '#' + category;

            // Remove active attribute
            this.element_active.removeAttribute('data-css');

            // There are no elements
            if (elements_all.length == 0) {

            // There are elements
            } else {
              // Prevent default action
              e.preventDefault();

              // Iterate over all elements and show them
              for (var j = 0; j < elements_all.length; j++) {
                elements_all[j].removeAttribute('data-css');
              }

              // Save the active element
              this.element_active = child;

              // Add active attribute
              this.element_active.setAttribute('data-css', 'active');

              // Find elements to hide
              var elements = this.contentArea.querySelectorAll('[data-js="element"]:not([data-category="'+category+'"]');

              // Filter elements if the category is not blog (parent of all elements)
              if (category != "blog") {
                // Iterate over all elements and hide them
                for (var j = 0; j < elements.length; j++) {
                  elements[j].setAttribute('data-css', 'hide');
                }
              } else {
                // Reset hash for home
                _location.hash = '';
              }

            } // There are elements

          // Turn the filter off
          } else {
            // Prevent default action
            e.preventDefault();

            // Iterate over all elements and show them
            if (category != "blog") {
              for (var j = 0; j < elements_all.length; j++) {
                elements_all[j].removeAttribute('data-css');
              }

              // Save the active category
              this.category_active = null;

              // Change the hash to the current category
              _location.hash = '';

              // Remove active attribute
              this.element_active.removeAttribute('data-css');
            }

          }

        }.bind(this), false);
      }
    
    } catch(e) {}
  };

  return Navigation;
})();