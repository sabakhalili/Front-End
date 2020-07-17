import React,{Component} from 'react';
import {View,StyleSheet,Text,StatusBar,TextInput,FlatList, Image} from 'react-native';
import {Card,CardItem,Right, Left,Icon,Button, Container,Content,Thumbnail} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Home from './Home';
import * as Animatable from 'react-native-animatable';



export default class Recommendedjobs extends Component {
  constructor(props){
    super(props)
    this.state = {
      liked:false, // default button color goes here, grey is default
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
          
            
              <Card>
                  <CardItem>
                  <View>
                    <Thumbnail source={this.props.imageUri}/> 
                  </View>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{borderRadius:30}}>
                  <Right style={{ flex: 1, alignItems: 'flex-start', height: 120, paddingHorizontal: 20,paddingTop:5}}>
                    <View style={{flexDirection:'row'}}>
                      <Text style={{fontSize:14,color:'#04C3EA',fontWeight:'bold'}} >{this.props.itempost}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                      <Icon name="md-briefcase" />
                      <Text style={{fontSize:12,marginLeft:4}}>{this.props.itemcompany}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                      <Icon name="md-home"/>
                      <Text style={{fontSize:12,marginStart:2}}>{this.props.itemloc}</Text>
                    </View>
                    <View style={{width:70,height:20,marginTop:10,borderRadius:5,borderWidth:1,backgroundColor:'#16F485',borderColor:'#16F485'}}>
                      <Text style={{marginLeft:5,color:'white'}}>Full Time</Text>
                    </View>
                  </Right> 
                  
                  </TouchableOpacity>
                  <Right style={{ flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={() => this.likedToggled()}>
                    <Icon name='heart' style={{fontSize:30,color:heartIconColor,}} />
                    <Text>13d</Text>
                    </TouchableOpacity>
                  </Right>
                  </CardItem>
          
                  </Card>
            
    );
}
  }