import React, { Component } from "react";
import {StyleSheet} from 'react-native';
import { Container, Header, Content, Icon, Accordion, Text, View,Footer, Button, Title, H1,Card, CardItem,Right, Left } from "native-base";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function Aq() {
  return (
    <Container>
        <Header></Header>
        <Content>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,flex:1}}>
            <Text>Questions: 10</Text>
            <Text>Time: 10</Text>
        </View>
        <TouchableHighlight style={{justifyContent:'center',alignItems:'center'}}
        >
          <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderRadius:10,width:'50%',height:50,borderColor:'blue',}}>
            <View style={{flexDirection:'row',}}>
              <Text style={{marginRight:10,textAlign:'center'}}>Start Test</Text>
              <Icon name="exit" />
            </View>
          </View>
        </TouchableHighlight>
        </Content>
        <Footer/>
    </Container>
  )
}

const styles = StyleSheet.create({
  
    item:{
        margin:40,
        width:'90%',
        marginLeft:30,
        marginTop:15,
        marginBottom:15,
        backgroundColor:'white',
        padding:40
    },
   header:{ 
    backgroundColor: '#09115D',
   height: 70,
    borderBottomColor: '#09115D'
   },
   signIn: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  
   });