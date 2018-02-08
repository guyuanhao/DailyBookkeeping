import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import LoginPage from './src/components/LoginPage';
import HomePage from "./src/components/HomePage";


const RootStack = StackNavigator(
  {
    Home: {
      screen: LoginPage,
    },
    Details:{
      screen: HomePage,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {

  render() {

    return (
      <RootStack />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
