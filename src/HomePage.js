import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SecondPage from "TestSecondFile";

import {
  StackNavigator,
} from 'react-navigation';

export default class HomePage extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    
    const App = StackNavigator({
      Home: { screen: HomePage },
      Profile: { screen: SecondPage },
    });
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});