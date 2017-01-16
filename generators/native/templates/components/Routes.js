import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Header,
    Link,
    nativeHistory,
    Route,
    Router,
    StackRoute,
} from 'react-router-native';

import Landing from './landing/Landing';
import { Page2, Page2Header } from './page2/Page2';

const Master = (props) => (
  <View style={{ flex: 1 }}>
    {props.children}
  </View>
);

export default () => (
    <Router history={nativeHistory}>        
        <StackRoute path="master" component={Master} >
            <Route path="/" component={Landing} />
            <Route path="/page2" component={Page2} overlayComponent={Page2Header} />
        </StackRoute>
    </Router>
)

