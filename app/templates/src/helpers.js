define([], function() {
  var helpers = {};

  // Given a CSS string, add it to the DOM.
  // Adding it to the head and as a domnode so that it's picked up properly.
  helpers.addCssToDocument = function(cssString) {
    var head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
    style.type = 'text/css';
    if(style.styleSheet) {
      style.styleSheet.cssText = cssString;
    }
    else {
      style.appendChild(document.createTextNode(cssString));
    }
    head.appendChild(style);
  }

  return helpers;

});
