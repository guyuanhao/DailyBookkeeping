import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import LoginPage from './src/components/LoginPage';
import HomePage from "./src/components/HomePage";
import NotePage from './src/components/NotePage';


const RootStack = StackNavigator(
  {
    Login:{ screen: LoginPage},
    Home:{ screen: HomePage},
    Note:{ screen: NotePage}
  },
  {
    headerMode: 'none',
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
