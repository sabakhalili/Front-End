import React from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { Card, CardItem, Container,Header ,Content,Item,Input,Icon,Button,Left,Body,Title,Right,Form,Label, Thumbnail} from 'native-base';



export default function Account() {
    return (
      <Content padder style={{backgroundColor:'#8790AF'}}>
        <ScrollView>
          <Card style={{borderRadius:30}}>
            <View style={{alignItems:'center',marginTop:20}}>
              <Thumbnail large source={{uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'}}/>
                <TouchableHighlight style={{backgroundColor: "#04c3ea" }}
                  underlayColor="#16F485"
                  onPress={() => navigation.navigate('')} >
                  <Text style={{color: 'white'}}>Change Profile picture</Text>
                </TouchableHighlight>
            </View>
            <Item floatingLabel style={styles.item}>
            <Icon active name='contact' style={styles.icon} />
            <Label>UserName</Label>
            <Input/>
          </Item>
          <Item floatingLabel style={styles.item}>
            <Icon active name='mail' style={styles.icon} />
            <Label>Email</Label>
            <Input/>
            </Item>
            <Item floatingLabel style={styles.item}>
          <Icon active name='contact' style={styles.icon} />
          <Label>Contact Number</Label>
          <Input/>
            </Item>
            </Card>
            <Card style={{borderRadius:30}}>
            <Item floatingLabel style={styles.item}>
            <Label>Resume Link</Label>
            <Input/>
            </Item>
            <Item floatingLabel style={styles.item}>
            <Label >Resume Upload</Label>
            <Input/>
            </Item>
            
            <Item floatingLabel style={styles.item}>
            <Label>Audio Profile</Label>
            <Input/>
            </Item>
           
           {/*<Text style={styles.item}>Supported Formats: mpeg,ogg,mp4,webm,3gp,mov,flv,avi,wmv,ts upto 5 MB</Text>*/}
            
            
       
           <Item floatingLabel style={styles.item}>
            <Label>Video Profile</Label>
            <Input/>
            </Item>
           {/*<Text style={styles.item}>Supported Formats: mpeg,ogg,mp4,webm,3gp,mov,flv,avi,wmv,ts upto 5 MB</Text>*/}
            
            
           </Card>
            </ScrollView>
            
            </Content>
      
    );
  }

  const styles = StyleSheet.create({
header:{ 
  backgroundColor: '#09115D',
 height: 90,
  borderBottomColor: '#09115D'
 },
 left:{
  flex: 1, 
   alignItems: 'flex-start',
    paddingHorizontal: 5
   },
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