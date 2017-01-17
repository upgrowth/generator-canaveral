import React, { Component } from 'react';

import {
  Header,
  Link,
} from 'react-router-native';
import {
  Button,
  View,
  ListView,
  Screen,
  Text
} from '@shoutem/ui'

import { connectStyle } from '@shoutem/theme';

class Landing extends Component {
  render() {
    const style = this.props.style;
    return (
      <Screen style={style.page}>        
          <Button styleName="dark">
            <Link to="/page2">
              <Text>Open Page 2</Text>
            </Link>
          </Button>        
      </Screen>
    );
  }
}

const style = {
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }  
};

export default connectStyle('Landing', style)(Landing);
