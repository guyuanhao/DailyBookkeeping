import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class HomePage extends React.Component {

  static navigationOptions = {
    title: 'Home Page',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

