import React from 'react';
import {View, StyleSheet, } from 'react-native';

import StaticContainer from './StaticContainer';

class SceneComponent extends React.PureComponent {
  render () {
    const {shouldUpdated, ...props, } = this.props;

    return <View {...props}>
        <StaticContainer shouldUpdate={shouldUpdated}>
          {props.children}
        </StaticContainer>
    </View>;
  }
}

export default SceneComponent;
