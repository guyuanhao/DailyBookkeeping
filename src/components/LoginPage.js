import React from 'react';
import {StatusBar, TextInput, Button, StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity  } from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from "../styles";

export default class LoginPage extends React.Component {

  static navigationOptions = {
    header: null,
    title: 'Welcome',
  };

  goToHomePage = () =>{
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' })
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={require('../statics/logo.png')} />
        </View>
        <KeyboardAvoidingView 
          behavior="padding"
          style={styles.formContainer}>
          <TextInput
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            style={styles.input}
            placeholder="email or username"
            returnKeyType="next"
            placeholderTextColor="rgba(255,255,255,0.7)"
            onSubmitEditing = {() => this.passwordInput.focus()}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TextInput
            secureTextEntry
            underlineColorAndroid='transparent'
            style={styles.input}
            returnKeyType="go"
            placeholder="password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            ref = {(input) => this.passwordInput = input}
          />
          <TouchableOpacity
            onPress={this.goToHomePage}
            style={styles.button}>
            <Text style={{color:"rgba(255,255,255, 1)", textAlign:"center", fontSize:22}}>LOGIN</Text>
          </TouchableOpacity> 
            
        </KeyboardAvoidingView>
        
        
      </View>
    );
  }
}


