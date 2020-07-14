import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { Container,Fab,Icon, Card, CardItem,Text,View, Header,H1, Button, Content,Left, Title,List,ListItem,Accordion, Right} from "native-base";

export default function Performancepage({navigation}) {
  const dataArray = [
    { title: "Overall Analysis", content: "Adversary question: Adversary is a person who fights against something or someone, or is a person who is considered to be a competitor or enemy. For the character of Batman, the Joker is an example of an adversary " },
    { title: "Soft Skill Analysis", content: "Lorem ipsum dolor sit amet" },
    { title: "Technical Analysis", content: "Lorem ipsum dolor sit amet" }
  ];
  return (
    <Container>
      <Header style={styles.header}>
      <Left style={styles.left}>
          <Icon name="md-menu" style={{ color: 'white' }} onPress={() => navigation.openDrawer()} />
        </Left>
        <Text style={{color:'white',alignSelf:'center'}}>Performance page</Text>
        <Right/>
            </Header>
      <Content>
        <Text style={{textAlign:'center',marginTop:10}}>Take another test?</Text>
        <TouchableHighlight style={{backgroundColor:'#04c3ea',width:'50%',alignSelf:'center',margin:10,padding:12,borderRadius:10}}
        underlayColor="#16F485"  onPress={() => navigation.navigate('Tests')}>
          <Text style={{alignSelf:'center'}}>GO TO TESTS PAGE</Text>
        </TouchableHighlight>
        <Accordion dataArray={dataArray} expanded={0} style={{marginTop:30}}/>
      </Content>
    </Container>
  );
      }

  
      const styles = StyleSheet.create({
        centeredView: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22
        },
        modalView: {
          marginTop:200,
          margin: 20,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 40,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          height:'50%',
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5
        },
        openButton: {
          backgroundColor: "#F194FF",
          height:30,
          width:30
        },
        textStyle: {
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
        },
        modalText: {
          marginBottom: 15,
          textAlign: "center"
        },
        left:{
          flex: 1, 
           alignItems: 'flex-start',
            paddingHorizontal: 5
           },
           header:{ 
  backgroundColor: '#09115D',
 height: 70,
  borderBottomColor: '#09115D'
 },
      });
      