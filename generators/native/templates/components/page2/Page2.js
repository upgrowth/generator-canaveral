import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Header,
  Link,
  nativeHistory,
  Route,
  Router,
  StackRoute,
  withRouter,
} from 'react-router-native';

export class Page2 extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Text>Page 2</Text> 
      </View>
    );
  }
}

export class Page2Header extends Component {
  render() {
    return (
      <Header  {...this.props} title="Page 2" leftButtonText="Back"></Header>      
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
  }
});