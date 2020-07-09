import React, { useState } from "react";
import { View,Picker,StyleSheet,Text,TextInput} from "react-native";
import { ScrollView } from "react-native-gesture-handler";


export default function App() {
  const [selectedValueone, setSelectedValueone] = useState("Job Type");
  const [selectedValuetwo, setSelectedValuetwo] = useState("Distance");
  const [selectedValuethree, setSelectedValuethree] = useState("Location");
  return (
    <View style={styles.container}>
      <View style={styles.slide1}>
        <View>
    <Text style={{color:'#04C3EA',fontWeight:'bold',fontSize:20}}>Saved Jobs </Text>
    <TextInput
          placeholder="Search Jobs"
          style={styles.textInput}/>
          </View>
    <View style={styles.footer}>
    <View style={{flexDirection:"row"}}>
      <Picker
        selectedValueone={selectedValueone}
        style={{ height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => setSelectedValueone(itemValue)}>
        <Picker.Item label="Job Type" value="Job Type" />
        <Picker.Item label="Full Time" value="Full Time" />
        <Picker.Item label="Part Time" value="Part Time" />
        <Picker.Item label="Free Lancer" value="Free Lancer" />
        <Picker.Item label="Work from Home" value="Work from Home" />

      </Picker>
      <Picker
        selectedValuetwo={selectedValuetwo}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValuetwo(itemValue)}>
        <Picker.Item label="Distance" value="Distance" />
        <Picker.Item label="10 km" value="10 Km" />
        <Picker.Item label="50 km" value="50 Km" />
        <Picker.Item label="100 km" value="100 Km" />
      </Picker>
      <Picker
        selectedValuethree={selectedValuethree}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValuethree(itemValue)}>
        <Picker.Item label="Location" value="Location" />
      </Picker>
      </View>
      <View style={{flexDirection:'row'}}>
      <View style={styles.Boxfooter} >
        <ScrollView>
          
          </ScrollView>
      </View>
      <View style={styles.Boxfootertwo} ></View>
      </View>
      </View>
      </View> 
      </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
      },
      footer:{
        flex:1,
      },
      textInput: {
        marginTop:50,
        padding:10,
        color: '#05375a',
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginBottom:1,
        height: 40, 
        marginRight:10
    },
    Boxfooter:{
      padding:10,
      color: '#05375a',
      height: 500, 
      borderColor: 'gray', 
      borderWidth: 1,
      marginBottom:1,
      width:150
    },
    Boxfootertwo:{
      padding:10,
        color: '#05375a',
        height: '80%', 
        borderColor: 'gray', 
        borderWidth: 1,
        marginBottom:1,
        width:200
    },
    slide1: {
      margin:20,
      flex: 1,
    },
});
