'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var SqwidgetGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Sqwidget generator.'));

    var prompts = [{
      name: 'widgetName',
      message: 'Would you like to call your widget?'
    }];

    this.prompt(prompts, function (props) {
      this.widgetName = props.widgetName;

      done();
    }.bind(this));
  },

  app: function () {
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.copy('bowerrc', '.bowerrc');
    this.copy('gitignore', '.gitignore');
    this.copy('Gruntfile.js', 'Gruntfile.js');
    this.template('README.md', 'README.md');
    this.template('index.html', 'index.html');

    this.directory('src', 'src');
    this.directory('tasks', 'tasks');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = SqwidgetGenerator;
