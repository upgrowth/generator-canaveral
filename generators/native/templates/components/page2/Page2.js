import React, { Component } from 'react';
import {
  Header,
  Link,
  Pop,
  nativeHistory,
  Route,
  Router,
  StackRoute,
  withRouter,
} from 'react-router-native';
import {
  View,
  ListView,
  Screen,
  NavigationBar,
  Title,
  Text,
  Icon
} from '@shoutem/ui'

export class Page2 extends Component {
  render() {
    return (
      <Screen style={styles.page}>      
          <Text>Page 2</Text>        
      </Screen>
    );
  }
}

export class Page2Header extends Component {
  render() {
    return (
      <NavigationBar 
          styleName="inline"           
          leftComponent={(<Pop><Icon name="back" /></Pop>)}
          title={"Page 2"}/>            
    );
  }
}

const styles = {
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
  }
};

