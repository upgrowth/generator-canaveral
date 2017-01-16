import React, { Component } from 'react';
import { fetch } from 'react-native';
import { nativeHistory } from 'react-router-native';
import firebase from '../services/firebase';
import Routes from './Routes';



export default class App extends Component {
    constructor(props) {
        super(props);        
    }    
  
    render() {
        return <Routes />;
    }
}

