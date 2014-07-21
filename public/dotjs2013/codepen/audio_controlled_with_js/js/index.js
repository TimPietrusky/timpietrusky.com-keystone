/*
 * sound from http://www.freesound.org/people/Timbre/sounds/207618/
 */


(function (window, document) {
  "use strict";
  
  var el_audio = document.querySelector('.dotjs__audio');
  
  function resetAudio() {
    // Start from the beginning
    el_audio.currentTime = 0;
    // Play the audio
    el_audio.play();
  }
  
  // Reset the audio after it has ended
  el_audio.addEventListener('ended', function() {
    resetAudio();
  }, false);

}(this, document));