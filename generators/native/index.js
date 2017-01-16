'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
// var yosay = require('yosay');
var glob = require('glob');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(this.fs.read(this.templatePath('../../../rocket.txt')));

    var reactNativeInitialised = this.config.get('reactNativeInitialised') || false;

    var prompts = [      
      {
        type: 'input',
        name: 'firebaseName',
        message: 'Firebase app name',
        default: this.appname
      },
      {
        type: 'input',
        name: 'firebaseApiKey',
        message: 'Firebase API key'
      },
      {
        type: 'input',
        name: 'firebaseSenderId',
        message: 'Firebase Messaging Sender ID'
      }
    ];

    return this.prompt(prompts).then(function (props) {
      
      // To access props later use this.props.someAnswer;
      this.props = props;      
      this.props.name = this.appname;
      this.config.save();
    }.bind(this));

    
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**'),
      this.destinationPath(),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('.*'),
      this.destinationPath(),
      this.props
    );
    
  }

  install() {  
    this.yarnInstall(['react-router-native', 're-base']);
  }
};
