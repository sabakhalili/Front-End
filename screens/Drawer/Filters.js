import React,{Component,useState} from 'react';
import {View,StyleSheet,Text,StatusBar,TextInput,FlatList,Modal} from 'react-native';
import { TouchableOpacity, ScrollView,TouchableHighlight } from 'react-native-gesture-handler';
import {Card,CardItem, Container, Header,Left,Right,Button,Icon,Item,Input,Content,Picker, Footer, FooterTab} from 'native-base';


export default class Filters extends Component
{
    dist= {
        selected: "key0"
      };
      distance(value) {
        this.setState({
          selected: value
        });
    }
    state = {
        selected: "key1"
      };
      location(value) {
        this.setState({
          selected: value
        });
    }
    state = {
        modalVisible: false
      };
      setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }
    
    render(){
        const { modalVisible } = this.state;
    return(
        <TouchableOpacity onPress={() => {
            this.setModalVisible(!modalVisible);
          }}>
        <View style={{ width: 100, backgroundColor: '#e7e7eb', height: 50, borderRadius: 4,marginLeft: 5, padding: 10 }}>
          <Text style={{ fontSize: 12,textAlign:'center' }}>Search using</Text>
          <Text style={{ fontWeight: 'bold',textAlign:'center'}}>Filter</Text>
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
  >
    <View style={{backgroundColor:'white',flex:1}}>
      <Header style={{backgroundColor:'white'}}>
        <Left>
        <Text style={{ fontSize:20,textAlign:'center'}}>Filter</Text>
        </Left>
        <Right>
      <Icon name="close" 
      onPress={() => {
            this.setModalVisible(false);
          }}/>
          </Right>
          </Header>
          <Content>
    <Item >
      <Left style={{marginLeft:10}}><Text>Distance</Text></Left>
      <Right>
      <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.dist.selected}
              onValueChange={this.distance.bind(this)}
            >
              <Picker.Item label="Select" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
      </Right>
    </Item>
    <Item>
      <Left style={{marginLeft:10}}><Text>Location</Text></Left>
      <Right>
      <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.location.bind(this)}
            >
              <Picker.Item label="Select" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
      </Right>
    </Item>
    <Item>
      <Left style={{marginLeft:10}}><Text>Job Type</Text></Left>
      <Right>
      <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.location.bind(this)}
            >
              <Picker.Item label="Select" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
      </Right>
    </Item>
    </Content>
    </View>
    <Footer style={{backgroundColor:'white'}}>
        <TouchableHighlight><Text style={{fontWeight:'bold'}}>Apply filters</Text></TouchableHighlight>
    </Footer>
    
  </Modal>
        </View>
      </TouchableOpacity>
    );
}
}