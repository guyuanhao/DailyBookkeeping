import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default class LoginPage extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {

    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Login Page</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
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