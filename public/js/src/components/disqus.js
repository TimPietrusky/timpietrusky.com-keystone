/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
var disqus_shortname = 'timpietrusky'; // required: replace example with your forum shortname


/* * * DON'T EDIT BELOW THIS LINE * * */
(function() {
    // Only load embed.js if a disqus_thread is found in the DOM
    if (document.querySelector('#disqus_thread') !== null) {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    }
})();