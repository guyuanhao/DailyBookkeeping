import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from "../styles";

export default class NotePage extends React.Component {

  static navigationOptions = {
    title: 'Note',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>NotePage Screen</Text>
      </View>
    );
  }
}

