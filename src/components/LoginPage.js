import React from 'react';
import {StatusBar, TextInput, Button, StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity  } from 'react-native';


export default class LoginPage extends React.Component {

  static navigationOptions = {
    title: 'Login',
  };

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
            onPress={() => this.props.navigation.navigate('Details')}
            style={{backgroundColor:"#5B3256", paddingVertical:10}}>
            <Text style={{color:"rgba(255,255,255, 1)", textAlign:"center"}}>LOGIN</Text>
          </TouchableOpacity> 
            
        </KeyboardAvoidingView>
        
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BE90D4'
  },
  logoContainer:{
    flex:2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer:{
    flex:3,
    padding: 20,
    justifyContent: 'center'
  },
  logo: {
    width:100,
    height:100
  },
  input : {
    height : 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom:20,
    color:'#FFF',
    paddingHorizontal:15
  }
});