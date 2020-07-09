import React from 'react';
import {View,StyleSheet} from 'react-native';
import { Container,Header,Card,CardItem,Content,Text, Right, Button, Icon} from 'native-base';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';


export default function Testbox({navigation}) {
    return (
      <Container >
        <Header style={styles.header}>
          <Text style={{color:'white'}}>Take Test</Text>
        </Header>
        <Content padder style={{backgroundColor:'#8790AF'}}>
        <View style={{marginTop:20}}>
          <View style={[styles.item,{borderRadius:30}]}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text>Audio</Text>
            <Button><Text>Upload File</Text></Button>
            </View>
          </View>
          <View style={[styles.item,{borderRadius:30}]}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text>Video</Text>
            <Button><Text>Upload File</Text></Button>
            </View>
            </View>
        <TouchableHighlight onPress={() => navigation.navigate('Eq')}
          style={[styles.item,{borderRadius:30}]}
          underlayColor="#16F485">
        
            <Text>Emotional Quotient</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Hgmi')}
        style={[styles.item,{borderRadius:30}]}
        underlayColor="#16F485"
        activeOpacity={0.6}>
              <Text>HGMI</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Aq')}
        style={[styles.item,{borderRadius:30}]}
        underlayColor="#16F485">
          
              <Text>AQ</Text>
        </TouchableHighlight>
        </View>
        </Content>  
      </Container>
    );
  }

  const styles = StyleSheet.create({
  
  item:{
    margin:40,
    width:'90%',
    marginLeft:30,
    marginTop:15,
    marginBottom:15,
    backgroundColor:'white',
    padding:40
 },
 header:{ 
  backgroundColor: '#09115D',
 height: 70,
  borderBottomColor: '#09115D'
 },

 });