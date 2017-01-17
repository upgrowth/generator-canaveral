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
    var self = this;
    var prompts = [      
      {
        type: 'input',
        name: 'firebaseName',
        message: 'Firebase app name',
        default: function(){
          return self.config.get('firebase-name') || self.appname;
        }
      },
      {
        type: 'input',
        name: 'firebaseApiKey',
        message: 'Firebase API key',
        default: function(){
          return self.config.get('firebase-apikey');
        }
      },
      {
        type: 'input',
        name: 'firebaseSenderId',
        message: 'Firebase Messaging Sender ID',
        default: function(){
          return self.config.get('firebase-sender-id');
        }
      }
    ];

    return this.prompt(prompts).then(function (props) {      
      // To access props later use this.props.someAnswer;
      this.props = props;      
      this.props.name = this.appname;
      this.config.set('firebase-name', this.props.firebaseName);
      this.config.set('firebase-apikey', this.props.firebaseApiKey);
      this.config.set('firebase-sender-id', this.props.firebaseSenderId);
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
    this.yarnInstall([
      'react-router-native', 
      're-base', 
      '@shoutem/ui',
      'react-native-vector-icons@^4.0.0',
      'react-native-linear-gradient@^2.0.0'
    ]);
  }
};
