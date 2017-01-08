import * as React from 'react';
import base from './base';

let LoginButton = (props) => (
  <div className="LoginButton">
    {props.providers.map((provider) => (
      <button className={provider} 
              key={provider}
              onClick={() => props.onLogin(provider)}>
                Login with {provider}
      </button>
    ))}
  </div>
);

export default class LoginControls extends React.Component<any, {user: any}> {
  constructor() {
    super()
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {user: undefined};
  }

  login(provider) {
    return base.authWithOAuthPopup(provider);
  }

  logout() {
    return base.unauth();
  }
  componentDidMount() {
    base.onAuth((user) => {
      this.setState({user});
    })
  }
  render() {
    if (this.state.user) {
      return (
        <div>
          <img src={this.state.user.photoURL} height="50px"/>
          {this.state.user.displayName}
          <button onClick={this.logout}>Log out</button>
        </div>
      );
    }
    else {
      return <LoginButton providers={this.props.providers} onLogin={this.login} />;
    }
  }
}