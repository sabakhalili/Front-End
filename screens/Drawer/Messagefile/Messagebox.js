import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Item,Icon,Input,Button } from 'native-base';
import Messageindi from './Messageindi';


export default function Messagebox({navigation}) {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="search" />
            <Input placeholder="Search Company" />
            <Icon name="briefcase" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <List>
            <TouchableOpacity onPress={() => navigation.navigate('Messageindi')}>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                  }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            </TouchableOpacity>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                  }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                  }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }