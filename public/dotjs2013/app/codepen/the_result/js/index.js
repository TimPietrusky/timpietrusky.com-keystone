(function (window, document) {
  "use strict";
  
  var el = document.querySelector('.dotjs'),
      clone,
      el_audio = document.querySelector('.dotjs__audio'),
      running = false;
  
  // Reset the animation
  function resetAnimation() {
    // Clone the element
    clone = el.cloneNode(true);
    // Replace the element with the clone
    el.parentNode.replaceChild(clone, el);
    // The clone is the new element
    el = clone;
    // Add an event handler
    el.addEventListener('click', function() {
      running = !running;
      reset();
    }, false);
  }
  
  // Reset the audio
  function resetAudio() {
    // Start from the beginning
    el_audio.currentTime = 0;
    // Play the audio
    el_audio.play();
  }
  
  // Reset aniamtion and audio
  function reset() {
    if (running) {
      resetAudio();
      resetAnimation();
    } 
  }
  
  // Reset the audio after it has ended
  el_audio.addEventListener('ended', function() {
    reset();
  }, false);
  
  // Call it once to attach the click handler
  resetAnimation();

}(this, document));