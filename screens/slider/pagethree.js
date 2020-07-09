import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import { Card, CardItem, Container,Header ,Content,Item,Input,DatePicker,Icon,Button,Left,Textarea,Body,Title,Right,Form,Label,Picker, Thumbnail, Footer} from 'native-base';




export default class Education extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selected: "key0"
    };
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
          <Item floatingLabel style={styles.item}>
            <Icon active name='contact' style={styles.icon} />
            <Label>Qualification</Label>
            <Input/>
          </Item>
          <Item floatingLabel style={styles.item}>
            <Icon active name='mail' style={styles.icon} />
            <Label>Specialization</Label>
            <Input/>
            </Item>
            <Item floatingLabel style={styles.item}>
          <Icon active name='school' style={styles.icon} />
          <Label>University/Board</Label>
          <Input/>
            </Item>
            <Item floatingLabel style={styles.item}>
          <Icon active name='school' style={styles.icon} />
          <Label>College/School</Label>
          <Input/>
            </Item>
            <Item floatingLabel style={styles.item}>
          <Icon active name='contact' style={styles.icon} />
          <Label>CGPA/Percentage</Label>
          <Input/>
            </Item>
            <Picker
              mode="dropdown"
              iosHeader="Year of Passing"
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
              <Picker.Item label="Year of Passing" value="key0" />
              <Picker.Item label=" 2021" value="key1" />
              <Picker.Item label="2020" value="key2" />
            </Picker>
          </Card>
          <Footer style={{backgroundColor:'#8790AF'}}>
          <TouchableOpacity>
            <Text>Add More</Text>
          </TouchableOpacity>
            </Footer>
        
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
    }
  });