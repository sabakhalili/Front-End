import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Card, CardItem, Container,Header ,Content,Item,Input,DatePicker,Icon,Button,Left,Textarea,Body,Title,Right,Form,Label,Picker, Thumbnail, Footer} from 'native-base';




export default class Career extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render(){
    return (
      <Content padder style={{backgroundColor:'#8790AF'}}>
        <ScrollView>
          <Card style={{borderRadius:30}}>
          <Item floatingLabel style={styles.item}>
            <Icon active name='contact' style={styles.icon} />
            <Label>Designation</Label>
            <Input/>
          </Item>
          <Item floatingLabel style={styles.item}>
            <Icon active name='mail' style={styles.icon} />
            <Label>Company name</Label>
            <Input/>
            </Item>
            <Item floatingLabel style={styles.item}>
          <Icon active name='contact' style={styles.icon} />
          <Label>Currently Employed</Label>
          <Input/>
            </Item>
            <Item floatingLabel style={styles.item}>
          <Icon active name='contact' style={styles.icon} />
          <Label>Description</Label>
          <Input/>
          </Item>
          <Item style={styles.item}>
              <Icon active name='calendar' style={styles.icon} />
          <DatePicker
            defaultDate={new Date(2020, 6, 2)}
            minimumDate={new Date(1990, 1, 1)}
            maximumDate={new Date(2020, 7, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select Date of birth"
            placeHolderTextStyle={{ color: "#454745" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            </Item>
            </Card>
            </ScrollView>
            </Content>
    );
  }
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
    },
    cont: {
      flex: 1,
      justifyContent: 'center',
      padding: 10,
      borderBottomWidth:1,
      marginLeft:38,
      marginRight:38,
      borderBottomColor:'gray',
      flexDirection:'row'
      
      
    },
  });