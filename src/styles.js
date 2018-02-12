import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#BC85EB'
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
      paddingHorizontal:15,
      borderRadius:25,
      fontSize:20
    },
    button:{
      backgroundColor:"#5B3256",
      paddingVertical:10,
      borderRadius:25
    }
  });