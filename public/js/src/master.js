var Navigation = require("./components/navigation.js");
var LazyLuke = require("./components/lazyluke.js");
var disqusLoader = require("./components/disqus.js");
var hljs = require("./components/highlight.pack.js");





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





// Main navigation
var navigation = new Navigation();





/**
 * Load comments
 */
if (document.querySelector('[data-js="load-comments"]') !== null) {
  document.querySelector('[data-js="load-comments"]').addEventListener('click', function(e) {
    e.preventDefault();

    // Remove button from DOM
    this.remove();

    // Show the comment block
    document.querySelector('[data-js="comment-block"]').classList.remove('hidden');

    // Load disqus
    new disqusLoader();
  });
}






/**
 * HighlightJS
 */
// At least one <code> element is on the page
if (document.getElementsByTagName('code').length > 0) {
  hljs.initHighlighting();
}





/**
 * Lazy load iframes
 */
var myLoader = new LazyLuke({
  elements : '[data-js-src]',
  srcAttribut : 'data-js-src'
});





/**
 * Load Codepen
 */
// At least one codepen element
if (document.querySelectorAll('.codepen').length > 0) {
  function __cp_domReady(e){/in/.test(document.readyState)?setTimeout("__cp_domReady("+e+")",9):e()}document.getElementsByClassName||(document.getElementsByClassName=function(e){var t,n,r,a=document,s=[];if(a.querySelectorAll)return a.querySelectorAll("."+e);if(a.evaluate)for(n=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",t=a.evaluate(n,a,null,0,null);r=t.iterateNext();)s.push(r);else for(t=a.getElementsByTagName("*"),n=new RegExp("(^|\\s)"+e+"(\\s|$)"),r=0;r<t.length;r++)n.test(t[r].className)&&s.push(t[r]);return s});var CodePenEmbed={width:"100%",init:function(){this._showCodePenEmbeds(),this.listenToParentPostMessages()},_showCodePenEmbeds:function(){for(var e=document.getElementsByClassName("codepen"),t=e.length-1;t>-1;t--){var n=this._getParamsFromAttributes(e[t]);if(n=this._convertOldDataAttributesToNewDataAttributes(n),n.user=this._findUsernameForURL(n,e[t]),this._paramsHasRequiredAttributes(n)){var r=this._buildURL(n),a=this._buildIFrame(n,r);this._addIFrameToPage(e[t],a)}}},_findUsernameForURL:function(e,t){if("string"==typeof e.user)return e.user;for(var n=0,r=t.children.length;r>n;n++){var a=t.children[n],s=a.href||"",i=s.match(/codepen\.(io|dev)\/(\w+)\/pen\//i);if(i)return i[2]}return"anon"},_paramsHasRequiredAttributes:function(e){return e["slug-hash"]},_getParamsFromAttributes:function(e){for(var t={},n=e.attributes,r=0,a=n.length;a>r;r++){var s=n[r].name;0===s.indexOf("data-")&&(t[s.replace("data-","")]=n[r].value)}return t},_convertOldDataAttributesToNewDataAttributes:function(e){return e.href&&(e["slug-hash"]=e.href),e.type&&(e["default-tab"]=e.type),e.safe&&(e.animations="true"===e.safe?"run":"stop-after-5"),e},_buildURL:function(e){var t=this._getHost(e),n=e.user?e.user:"anon",r="?"+this._getGetParams(e),a=e.preview&&"true"===e.preview?"embed/preview":"embed",s=[t,n,a,e["slug-hash"]+r].join("/");return s.replace(/\/\//g,"//")},_getHost:function(e){return e.host?this._getSafeHost(e.host):"file:"===document.location.protocol?"http://codepen.io":"//codepen.io"},_getSafeHost:function(e){return e.match(/^\/\//)||!e.match(/http:/)?document.location.protocol+"//"+e:e},_getGetParams:function(e){var t="";for(var n in e)""!==t&&(t+="&"),t+=n+"="+encodeURIComponent(e[n]);return t},_buildIFrame:function(e,t){var n="";""!==e["class"]&&(n=e["class"]);var r={id:"cp_embed_"+e["slug-hash"].replace("/","_"),src:t,scrolling:"no",frameborder:"0",height:this._getHeight(e),allowTransparency:"true",allowfullscreen:"true",name:"CodePen Embed",title:"CodePen Embed","class":"cp_embed_iframe "+n,style:"width: "+this.width+"; overflow: hidden;"},a="<iframe ";for(var s in r)a+=s+'="'+r[s]+'" ';return a+="></iframe>"},_getHeight:function(e){return e.height?e.height:300},_addIFrameToPage:function(e,t){if(e.parentNode){var n=document.createElement("div");n.innerHTML=t,e.parentNode.replaceChild(n,e)}else e.innerHTML=t},listenToParentPostMessages:function(){var e=window.addEventListener?"addEventListener":"attachEvent",t=window[e],n="attachEvent"===e?"onmessage":"message";t(n,function(){try{}catch(e){ga("send","exception",{exDescription:e.message+" - embeds"})}},!1)}};__cp_domReady(function(){CodePenEmbed.init()});
}