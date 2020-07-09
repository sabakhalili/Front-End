import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Card, CardItem, Container,Header ,Content,Item,Input,DatePicker,Icon,Button,Left,Textarea,Body,Title,Right,Form,Label,Picker, Thumbnail} from 'native-base';




export default function skills() {
    return (
      <Content padder>
      <ScrollView>
        <Card style={{borderRadius:30}}>
        <Item floatingLabel style={styles.item}>
          <Icon active name='contact' style={styles.icon} />
          <Label>Skills</Label>
          <Input/>
        </Item>
        <Item floatingLabel style={styles.item}>
          <Icon active name='mail' style={styles.icon} />
          <Label>Area of Interest</Label>
          <Input/>
          </Item>
          <Item floatingLabel style={styles.item}>
        <Icon active name='contact' style={styles.icon} />
        <Label> Add Certification</Label>
        <Input/>
          </Item>
          <Item style={styles.item}>
          <Text>Upload</Text>
          </Item>
          </Card>
          <TouchableOpacity>
            <Text>See More</Text>
          </TouchableOpacity>
          <Card style={{borderRadius:30}}>
          <Item floatingLabel style={styles.item}>
        <Icon active name='contact' style={styles.icon} />
        <Label>Achivements</Label>
        <Input/>
          </Item>
          <Item style={styles.item}>
          <Text>Upload</Text>
        
          </Item>
          
          </Card>
          <TouchableOpacity>
            <Text>See More</Text>
          </TouchableOpacity>
          </ScrollView>
          </Content>
    );
  }

  const styles = StyleSheet.create({
    icon:{
      fontSize: 20,
      color: '#04C3EA'
     },
     item:{
       margin:10,
       width:'80%',
       marginLeft:30,
       marginTop:15,
       marginBottom:15
    }
  });