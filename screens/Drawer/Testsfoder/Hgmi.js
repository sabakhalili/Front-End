import React, { Component } from "react";
import {StyleSheet} from 'react-native';
import { Container, Header, Content, Icon, Accordion, Text, View, Button, Title, H1,Card, CardItem,Right, Left } from "native-base";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function Hgmi() {
  return (
    <Container>
        <Header style={styles.header}>
            <H1 style={{color:'white',fontSize:20}}>HGMI Test</H1>
            </Header>
            <Content padder style={{backgroundColor:'#8790AF',marginTop:150}}>
        <View style={{marginTop:20}}>
          <View style={[styles.item,{borderRadius:30}]}>
            <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text>Questions: 10</Text>
            <Text>Questions: 10</Text>
            </View>
            <View style={{marginLeft:50,marginTop:50}} >
            <TouchableHighlight 
            underlayColor="#16F485"
            style={[styles.signIn, {
                    backgroundColor: '#09115D',
                      marginTop: 50}]}
                      onPress={() => navigation.navigate()}
                      activeOpacity={0.1}>
            <Text style={{color:'white'}}>ENTER TEST</Text>
            </TouchableHighlight>
            </View>
          </View>
          </View>
          </View>
            </Content>
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