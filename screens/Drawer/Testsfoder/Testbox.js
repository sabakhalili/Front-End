import React from 'react';
import {View,StyleSheet} from 'react-native';
import { Container,Header,Card,CardItem,Content,Text, Right, Button, Icon,Left,Item} from 'native-base';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';



export default function Testbox({navigation}) {
    return (
      <Container >
        <Header style={styles.header}>
        <Left >
          <Icon name="md-menu" style={{ color: 'white' }} onPress={() => navigation.openDrawer()} />
        </Left>
          <Text style={{color:'white',alignSelf:'center',marginLeft:100}}>Take Test</Text>
          <Right/>
        </Header>
        <Content padder>
        <View style={{marginTop:20}}>
            <Card>
        <TouchableOpacity onPress={() => navigation.navigate('Eq')}
          style={[styles.item,{borderRadius:30}]}
          underlayColor="#16F485">
        
            <Text>Emotional Quotient</Text>
        </TouchableOpacity>
        </Card>
        <Card>
        <TouchableOpacity onPress={() => navigation.navigate('Hgmi')}
        style={[styles.item,{borderRadius:30}]}
        underlayColor="#16F485"
        activeOpacity={0.6}>
              <Text>HGMI</Text>
        </TouchableOpacity>
        </Card>
        <Card>
        <TouchableOpacity onPress={() => navigation.navigate('Aq')}
        style={[styles.item,{borderRadius:30}]}>
          
              <Text>AQ</Text>
        </TouchableOpacity>
        </Card>
        <Item style={{paddingHorizontal: 10}}>
          <TouchableOpacity>
            <Text>Upload Audio Profile</Text>
            </TouchableOpacity>
            <Right>
            <Icon name="download" style={{ fontSize: 25, paddingTop: 5,color:'#04C3EA' }} />
            </Right>
            
            </Item>
            <Item style={{paddingHorizontal: 10}}>
            <TouchableOpacity>
            <Text>Upload Video Profile</Text>
            </TouchableOpacity>
            <Right>
            <Icon name="download" style={{ fontSize: 25, paddingTop: 5 ,color:'#04C3EA'}} />
            </Right>
            
            </Item>
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