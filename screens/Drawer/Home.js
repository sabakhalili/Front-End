import React, { Component } from 'react';
import {View,Text, StyleSheet,FlatList} from 'react-native';

export default class Home extends Component{
  render(){
    return (
    <View style={styles.container}>
      <Text>JOBS Section</Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


