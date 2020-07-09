import React, { Component } from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import { Card, CardItem, Container,Header ,Content,Item,Input,DatePicker,Icon,Button,Left,Textarea,Body,Title,Right,Form,Label,Picker, Thumbnail} from 'native-base';



export default class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
    this.state = {
      selected: "key0"
    };
    this.state = {
      selected: "key0"
    };
    this.state = {
      selected: "key0"
    };
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render(){

 
    return (
      <Content padder style={{backgroundColor:'#8790AF'}}>
        <ScrollView>
          <Card style={{borderRadius:30}}>
        <View testID="ProfileDetails" style={styles.slide2}>
        
        <Item floatingLabel style={styles.item}>
        <Icon active name='contact' style={styles.icon} />
            <Label>First Name</Label>
            <Input/>
            </Item>
            <Item floatingLabel style={styles.item}>
        <Icon active name='contact' style={styles.icon} />
            <Label>Middle Name</Label>
            <Input/>
            </Item>
            <Item floatingLabel style={styles.item}>
        <Icon active name='contact' style={styles.icon} />
            <Label>Last Name</Label>
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
            placeHolderTextStyle={{ color: "#454745",marginBottom:1}}
            onDateChange={this.setDate}
            disabled={false}
            />
            </Item>
            
            
            <View style={{width:200,flex:1,flexDirection:"row"}} >
            
            <Picker
              mode="dropdown"
              iosHeader="Select your Gender"
              iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
              style={{ width: undefined,margin:10,
                width:'80%',
                marginLeft:30,
                marginTop:15,
                marginBottom:15,
                }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Gender" value="key0" />
              <Picker.Item label="Female" value="key1" />
              <Picker.Item label="Male" value="key2" />
            </Picker>
          
          <Picker
              mode="dropdown"
              Header="Select your Gender"
              Icon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
              style={{ width: undefined,margin:10,
                width:'80%',
                marginLeft:30,
                marginTop:15,
                marginBottom:15,
                }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Select City" value="key0" />
              <Picker.Item label="India" value="key1" />
              
            </Picker>
            </View>
            <View style={{width:200,flex:1,flexDirection:"row",marginRight:10}} >
            <Picker
              mode="dropdown"
              iosHeader="Select your Gender"
              iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: '#04C3EA', fontSize: 25 }} />}
              style={{ width: undefined,margin:10,
                width:'80%',
                marginLeft:30,
                marginTop:15,
                marginBottom:15,
                }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Select state" value="key0" />
              <Picker.Item label="Bihar" value="key1" />
              
            </Picker>
            <Picker
              mode="dropdown"
              iosHeader="Select your Gender"
              iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: '#04C3EA', fontSize: 25 }} />}
              style={{ width: undefined,margin:10,
                width:'80%',
                marginLeft:30,
                marginTop:15,
                marginBottom:15,
                }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Select Country" value="key0" />
              <Picker.Item label="Delhi" value="key1" />
              
            </Picker>
            </View>
              
          
              <Item floatingLabel style={styles.item}>
        <Icon active name='contact' style={styles.icon} />
            <Label>Alternate Mobile</Label>
            <Input/>
            </Item>
            <Item floatingLabel style={styles.item}>
            <Icon active name='md-home' style={styles.icon} />
            <Label>Address</Label>
            <Input />
            </Item>
         </View> 
      
      </Card>
      </ScrollView>
      </Content>
    );
  }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    textInput: {
      flex: 1,
      marginTop:1,
      padding:10,
      color: '#05375a',
      height: 40, 
      borderColor: 'grey', 
      borderWidth: 1,
      marginBottom:1,
      height: 40,
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
   },
    footer:{
      margin:10,
      marginTop:50,
      flex:1,
      justifyContent: 'space-between',
    },
    cont: {
      flex: 1,
      justifyContent: 'center',
      padding: 10,
      marginLeft:38,
      marginRight:38,
      borderBottomColor:'gray',
      flexDirection:'row'
      
      
    },
  });