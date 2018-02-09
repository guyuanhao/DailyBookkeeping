import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import styles from "../styles";

export default class HomePage extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Note')}
            style={styles.button}>
            <Text 
              style={{color:"rgba(255,255,255, 1)", textAlign:"center", fontSize:22}}>
                note
            </Text>
          </TouchableOpacity> 
      </View>
    );
  }
}
