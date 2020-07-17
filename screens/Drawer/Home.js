import React, { Component } from 'react';
import {View,StyleSheet,StatusBar, TouchableHighlight,TouchableOpacity} from 'react-native';
import {Container,Header,Text, Content,Thumbnail,Tabs,Tab, Body,Segment,Card,Button,Left,Icon,Title, Right, Footer, FooterTab} from 'native-base';

import Tab1 from './Tab1';
import Tab2 from './Tab2';

export default class Home extends Component{
  constructor(props){
  super(props)
  this.state = {
    liked:false,
  };
}
likedToggled(){
  this.setState({
    liked:!this.state.liked
  })
}


  render(){
    const heartIconColor=(this.state.liked)? "#04C3EA":"grey";
    return (
      
    <Container>
      <Header style={{backgroundColor:'#09115d'}}>
        <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Google</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='share' />
            </Button>
          </Right>
      </Header>
          <Content>
        <View style={{flex:1,alignItems:'center',padding:40,}}>
        <Thumbnail source={require('../../assets/google.png')}/>
        <Text style={{marginTop:10,fontWeight:'bold'}}>Senior UI Designer</Text>
        <Text style={{marginTop:3}}>₹ 16000 - 28000</Text>
        <View style={{flexDirection:'row'}}>
        <View style={{width:70,height:20,marginTop:10,marginLeft:5,borderRadius:5,borderWidth:1,backgroundColor:'#16F485',borderColor:'#16F485'}}>
          <Text style={{marginLeft:5,color:'#000000',fontSize:13}}>Full Time</Text>
        </View>
        <View style={{width:70,height:20,marginTop:10,alignItems:'center',marginLeft:5,borderRadius:5,borderWidth:1,backgroundColor:'#16F485',borderColor:'#16F485'}}>
          <Text style={{marginLeft:5,color:'#000000',fontSize:13}}>Remote</Text>
        </View>
        <View style={{width:70,height:20,marginTop:10,marginLeft:5,borderRadius:5,borderWidth:1,backgroundColor:'#16F485',borderColor:'#16F485'}}>
          <Text style={{marginLeft:5,color:'#000000',fontSize:13}}>Anywhere</Text>
        </View>
        </View>
        </View>
        <View style={{flex:3}}>
        <Tabs>
          <Tab heading="Job" tabStyle={{backgroundColor: '#FFFFFF'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#FFFFFF'}} activeTextStyle={{color: '#04C3EA', fontWeight: 'normal'}}>
            <Tab1 />
          </Tab>
          <Tab heading="Company" tabStyle={{backgroundColor: '#FFFFFF'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#FFFFFF'}} activeTextStyle={{color: '#04C3EA', fontWeight: 'normal'}}>
            <Tab2 />
          </Tab>
        </Tabs>
        </View>
        </Content>

        <Footer style={{backgroundColor:'#FFFFFF'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity onPress={() => this.likedToggled()}>
                    <Icon name='heart' style={{fontSize:40,color:heartIconColor,}} />
                    </TouchableOpacity>
          <TouchableHighlight style={{borderRadius:10,backgroundColor:'#04C3EA',width:'80%',height:'95%'}}
            underlayColor='#16F485' onPress={() => navigation.navigate('')}>
              <Text style={{color:'#000000',fontSize:15,textAlign:'center',marginTop:15}} >Apply for Job</Text>
          </TouchableHighlight>  
          </View>
        </Footer>
          
        
        
      
    </Container>
  );
}
}



const styles=StyleSheet.create({

  signIn: {
    width: 200,
    height:10,
    borderRadius: 10,
    backgroundColor: '#09115d'
  },
}
)

