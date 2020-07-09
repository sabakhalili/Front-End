import React,{Component} from 'react';
import {View,StyleSheet,Button,Text,Dimensions,Image} from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import * as  Animatable from 'react-native-animatable';

  


export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Animatable.Image 
            animation="bounceIn"
            duraton="1500"
            source={require('../assets/JVRLogo.png')}
            style={styles.logo}
            resizeMode="stretch"
          />
        </View>
          <View style={styles.footer}>
            <View style={styles.button_container}>
              <View style={styles.button}>
                <TouchableHighlight onPress={() => navigation.navigate('Login')}
                  style={styles.signIn}
                  underlayColor="#16F485">
                  <Text style={{color:'#000000',fontSize:18}}>Login</Text> 
                </TouchableHighlight>
              </View>
                <View style={styles.button}>
                  <TouchableHighlight  onPress={() => navigation.navigate('Signup')}
                    style={styles.signIn}
                    underlayColor="#16F485">
                    <Text style={{color:'#000000',fontSize:18}}>Register</Text>
                  </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'white',
      
    },
    header:
    {
      flex:2, 
      alignItems:'center',
      justifyContent:'center'
    },
    footer:{
      flex:1,
      borderTopEndRadius:30,
      borderTopLeftRadius:30,
      backgroundColor:'white',
      paddingVertical:50,
      paddingHorizontal:30.
    },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius:10,
    backgroundColor: '#04C3EA'
},
    button: {
      //alignItems: 'baseline',
      marginTop: 10,
      
      
  },
  logo: {
    width: 200,
    height: 200,
  
},
button_container:{
  flex:1,
  flexDirection:'column-reverse',
  

}
  })