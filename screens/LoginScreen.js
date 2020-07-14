import React,{Component} from 'react';
import {View,StyleSheet,Button,Text,StatusBar,TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as  Animatable from 'react-native-animatable';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
//import * as firebase from 'react-native-firebase';
//import {firebaseConfig} from '../config';

//firebase.initializeApp(firebaseConfig);

export default function LoginScreen({ navigation }) {
  
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
});
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor='#000033'/>
  <View style={styles.header}>
      <Text style={styles.text_header}>Welcome!</Text>
  </View>
        <Animatable.View style={styles.footer}
        animation="fadeInUpBig">
        <Text style={styles.text_footer}>Email Address</Text>
        <View style={styles.action}>
          <TextInput
          placeholder="Your Email"
          style={[styles.textInput],{marginBottom:1}}
          />
         
          </View>
          <Text style={[styles.text_footer,{marginTop:0}]}>Password</Text>
        <View style={[styles.action],{marginTop:1}}>
          <TextInput
          placeholder="Your Password"
          secureTextEntry={true}
          style={[styles.textInput],{marginTop:1}}
          />
          </View>
          <View>
            <TouchableHighlight onPress={() => navigation.navigate('Profile')} 
            style={styles.signIn}
                  underlayColor="#16F485">
              <Text style={{color:'#000000',fontSize:18}} >Sign in</Text>
            </TouchableHighlight>
          </View>
          <Text style={[styles.textSign,{fontSize:10, textAlign:'center',marginTop:10}]}> OR
                 </Text>
                 <TouchableHighlight
                  //  onPress={() => navigation.navigate('Signup')}
                  style={styles.signIn}
                  underlayColor="#16F485">
                  <Text style={{color:'#000000',fontSize:18}}>Login with Mobile</Text>
              </TouchableHighlight>
          <TouchableHighlight
                  //  onPress={() => navigation.navigate('Signup')}
                  underlayColor="#16F485"
                  style={[styles.signIn,{
                      marginTop: 15
                  }]}>
                  <Text style={{color:'#000000',fontSize:18}}>Login with Google</Text>
              </TouchableHighlight>
              <View style={styles.signup}>
                 
                 <Text style={[styles.textSign,{fontSize:10, textAlign:'center'}]}> Not yet registered?
                 </Text>

                  <TouchableOpacity
                  onPress={() => navigation.navigate('Signup')}>
                  <Text style={[styles.textSign, {
                      color: 'black',
                      textAlign:'center'
                  }]}>Click here</Text>
              </TouchableOpacity>
              </View>
      </Animatable.View>
      </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#09115D'
  },
  footer: {
    flex: 3,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
},
header: {
  flex: 1,
  justifyContent: 'flex-end',
  paddingHorizontal: 20,
  paddingBottom: 50
},
text_header: {
color: '#fff',
//fontWeight: 'bold',
fontSize: 28,
marginBottom:20
},
text_footer: {
color: 'black',
fontSize: 18
},
  textInput: {
      flex: 1,
      marginTop:1,
      paddingLeft: 10,
      color: '#05375a',
  },
  action: {
    flexDirection: 'row',
    paddingBottom: 5
},
signIn: {
  width: '100%',
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  backgroundColor: '#04C3EA'
},
button: {
alignItems: 'center',
marginTop: 50
},
textSign: {
fontSize: 18,
fontWeight: 'bold'
},
signup:{
  padding:24,
  //backgroundColor:'blue',
  marginTop:32,
  
}
})