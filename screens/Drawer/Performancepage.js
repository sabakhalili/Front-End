import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { Container,Fab,Icon, Card, CardItem,Text,View, Header,H1, Button } from "native-base";

export default function Performancepage({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Container>
      <Header style={styles.header}>
            <H1 style={{color:'white',fontSize:20}}>Performancepage</H1>
            </Header>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
          <View style={styles.modalView}>
            <Text style={{marginBottom:50}}> Tests Available</Text>
            <View style={{flex:1,flexDirection:'row',}}>
            <Text style={{marginHorizontal:40}}> Eq</Text>
            <Button  onPress={() => navigation.navigate('Tests')}><Text>Take Test</Text></Button>

            </View>
            <View style={{flex:1,flexDirection:'row'}}>
            <Text style={{marginHorizontal:32}}>Hgmi</Text>
            <Button  onPress={() => navigation.navigate('Hgmi')}><Text>Take Test</Text></Button>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
            <Text style={{marginHorizontal:40}}>Aq</Text>
            <Button  onPress={() => navigation.navigate('Aq')}><Text>Take Test</Text></Button>
            </View>
          
            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text>Back</Text>
            </TouchableHighlight>
            </View>
      </Modal>

      <Fab
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#04c3ea' }}
            position="bottomRight"
            onPress={() => navigation.navigate('Tests')}
            >
            <Icon name="add"  style={{color:'black'}} />
            </Fab>
    </Container>
  );
      }

  
      const styles = StyleSheet.create({
        centeredView: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22
        },
        modalView: {
          marginTop:200,
          margin: 20,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 40,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          height:'50%',
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5
        },
        openButton: {
          backgroundColor: "#F194FF",
          height:30,
          width:30
        },
        textStyle: {
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
        },
        modalText: {
          marginBottom: 15,
          textAlign: "center"
        }
      });
      