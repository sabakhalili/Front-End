import React,{Component} from 'react';
import {View,StyleSheet,Button,Text,StatusBar,TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as  Animatable from 'react-native-animatable';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';


export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor='#09115D' barStyle="light-content"/>
  <View style={styles.header}>
      <Text style={styles.text_header}>Register!</Text>
  </View>
        <Animatable.View style={styles.footer}
        animation="fadeInUpBig">
        <View style={styles.action}>
          <TextInput
          placeholder="Name"
          style={styles.textInput}
          />
          </View>
        <View style={styles.action}>
          <TextInput
          placeholder="Email Address"
          style={styles.textInput}
          />
          </View>
          <View style={styles.action}>
          <TextInput
          placeholder="Phone"
          style={styles.textInput}
          />
          </View>
          <View style={styles.action}>
          <TextInput
          placeholder="Password"
          style={styles.textInput}
          />
          </View>
          <View style={styles.action}>
          <TextInput
          placeholder="Confirm Password"
          style={styles.textInput}
          />
          </View>
          <View>
            <TouchableHighlight onPress={() => navigation.navigate('Login')} 
            underlayColor="#16F485"
            style={[styles.signIn, {
              marginTop: 15
          }]}>
              <Text style={{color:'#000000',fontSize:18}}>Sign up New Account</Text>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight onPress={() => navigation.navigate('Login')} 
            underlayColor="#16F485"
            style={[styles.signIn, {
              marginTop: 15
          }]}>
              <Text style={{color:'#000000',fontSize:18}}>Sign up with Google+</Text>
            </TouchableHighlight>
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
      color: 'black',
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
}
})