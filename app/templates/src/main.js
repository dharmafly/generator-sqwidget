define([
  'require',
  './helpers',
  'i18n!./nls/strings',
  'text!compiled/css/main.css',
  'rv!templates/index'
], function(require, helpers, strings, css, template ) {

  var Ractive = require("Ractive");
  if( css ) {
    helpers.addCssToDocument(css);
  }

  return function(opts) {
    var view = new Ractive({
      el: opts.el,
      template: template,
      data: { message: strings.hello + " World" }
    });
  };
});
