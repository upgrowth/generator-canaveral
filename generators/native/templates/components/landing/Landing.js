import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import {
  Header,
  Link,
} from 'react-router-native';

export default class Landing extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Link to="/page2">
          <Text style={styles.text}>Open page 2</Text>
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {    
    color: "#333333"
  },
});