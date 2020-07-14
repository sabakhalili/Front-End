import React,{Component} from 'react';
import {View,StyleSheet,Button,Text,StatusBar,TextInput,FlatList,Modal} from 'react-native';
import { TouchableOpacity, ScrollView,TouchableHighlight } from 'react-native-gesture-handler';
import {Card,CardItem, Container, Header,Left,Right,Icon,Item,Input,Content, Footer, FooterTab} from 'native-base';

import Recommendedjobs from './Recommendedjobs';
import Home from './Home';


import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';


const Stack = createStackNavigator();

export default function DashBoard() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="DashBoardboard" component={DashBoardboard} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}


function DashBoardboard({navigation}) {
  
  return (
    <Container style={styles.container} >
      <Header style={styles.header}>
        <Left style={styles.left}>
          <Icon name="md-menu" style={{ color: 'white' }} onPress={() => navigation.openDrawer()} />
        </Left>
      </Header>
        <View style={{height: 70, backgroundColor: '#09115D', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5 }}>
          <View style={{ flex: 1, height: "100%", justifyContent: 'center' }}>
            <Item style={{ backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4 }}>
              <Icon name="search" style={{ fontSize: 20, paddingTop: 5 }} />
              <Input placeholder="Search" />
            </Item>
          </View>
          
        </View>
      <Content>
        <Text style={{fontSize:15,marginLeft:13,marginTop:13}}>Recommended jobs</Text>
          <ScrollView>
            <Recommendedjobs
              itempost="Office Assistant"
              itemcompany="Amiga Fashion Industry"
              itemloc="Chattisgarh"
              navigation={navigation}
              imageUri={require('../../assets/google.png')}
            />
            <Recommendedjobs
              itempost="Office Assistant"
              itemcompany="Amiga Fashion Industry"
              itemloc="Chattisgarh"
              imageUri={require('../../assets/Facebook.png')}
            />
            <Recommendedjobs
              itempost="Office Assistant"
              itemcompany="Amiga Fashion Industry"
              itemloc="Chattisgarh"
              imageUri={require('../../assets/Instagram.png')}
              
            />
            <Recommendedjobs
              itempost="Office Assistant"
              itemcompany="Amiga Fashion Industry"
              itemloc="Chattisgarh"
              imageUri={require('../../assets/JVRLogo.png')}
            />
              
              <Footer style={{backgroundColor:'white'}}>
              <Text style={{marginTop:20}}>See more</Text>
              </Footer>

          </ScrollView> 
      </Content>
    </Container> 

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    backgroundColor:'#8790AF'
},
header:{ 
  backgroundColor: '#09115D',
 height: 70,
  borderBottomColor: '#09115D'
 },
left:{
   flex: 1, 
    alignItems: 'flex-start',
     paddingHorizontal: 5
    },
    


})