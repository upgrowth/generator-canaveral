import React, { Component } from 'react';
import { fetch } from 'react-native';
import { nativeHistory } from 'react-router-native';
import Routes from './Routes';
import { StyleProvider } from '@shoutem/theme';
import firebase from '../services/firebase';
import theme from '../config/theme';


export default class App extends Component {
    constructor(props) {
        super(props);        
    }    
  
    render() {
        return (
        <StyleProvider style={theme}>
            <Routes />
        </StyleProvider>
        );
    }
}

