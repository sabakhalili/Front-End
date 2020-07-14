import React,{Component} from 'react';
import {View,StyleSheet,Text,StatusBar,TextInput,FlatList, Image} from 'react-native';
import {Card,CardItem,Right, Left,Icon,Button, Container,Content,Thumbnail} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Home from './Home';



export default class Recommendedjobs extends Component {
  
    render(){
        return (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Content padder>
              <Card style={{borderRadius:30}}>
                <CardItem>
                  <View>
                    <Thumbnail source={this.props.imageUri}/> 
                  </View>
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
                  <Right style={{ flex: 1, alignItems: 'flex-end'}}>
                    <Icon name="heart-empty" />
                    <Text>13d</Text>
                  </Right>
                </CardItem>
              </Card>
            </Content>
          </TouchableOpacity>
    );
}
  }