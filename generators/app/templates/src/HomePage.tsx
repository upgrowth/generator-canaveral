import * as React from 'react';
import {Link} from 'react-router';

const logo = require('./logo.svg');

let HomePage = () => (
    <div className="HomePage">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
  </div>
);

export default HomePage