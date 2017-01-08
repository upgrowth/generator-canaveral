import * as React from 'react';
import LoginControls from './LoginControls';

require('./App.scss');

const App = (props) => (
  <div className="App">
    <LoginControls providers={['google']}/>
    <div className="content">
      {props.children}
    </div>
  </div>
);

export default App;
