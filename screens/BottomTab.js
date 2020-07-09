import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import Account from '../slider/pageone';
import ProfileDetails from '../slider/pagetwo';
import Education from '../slider/pagethree';
import Career from '../slider/pagefour';
import Skills from '../slider/pagefive';
import { Card, CardItem,Container,Header,Body,Title,Left,Button,Icon,Right, Content } from 'native-base';



const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#04C3EA',
  separatorUnFinishedColor: '#16F485',
  stepIndicatorFinishedColor: '#04C3EA',
  stepIndicatorUnFinishedColor: '#16F485',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#16F485',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#4aae4f',
}



export default function EditProfile({navigation}) {
  const [currentPage, setCurrentPage] = useState(0);
 return (

    <Container style={styles.container} >
      <Header style={styles.header}>
        <Left style={styles.left}>
          <Icon name="md-menu" style={{ color: 'white' }} />
        </Left>
        
      </Header>
          <View style={{height: 100, backgroundColor: '#09115D',paddingHorizontal: 5 }}>
          <Text style={{fontSize:20,color:'white'}}>Welcome! You are just 5 minutes away from getting your dream job</Text>
        <StepIndicator
          customStyles={firstIndicatorStyles}
          currentPosition={currentPage}
          labels={['Account', 'Personal', 'Education', 'Career', 'Skills']}
          
        />
        </View>
      <Content>
      <Swiper
      loop={false}
      autoplay={false}
      onIndexChanged={(page) => {
      setCurrentPage(page);
      }}>
        

      <Account/>
      <ProfileDetails/>
      <Education/>
      <Career/>
      <Skills/>
      </Swiper>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
header:{ 
  backgroundColor: '#09115D',
 height: 70,
  borderBottomColor: '#09115D'
 },
 left:{
  flex: 1, 
   alignItems: 'flex-start',
    paddingHorizontal: 5
   },

});