import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Testbox from './Testbox';
import Audio from './Audio';
import Video from './Video';
import Eq from './Eq';
import Hgmi from './Hgmi';
import Aq from './Aq';
import Performancepage from '../Performancepage';

const Stack = createStackNavigator();

export default function Messages() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Testbox" component={Testbox} />
      <Stack.Screen name="Performancepage" component={Performancepage} />
      <Stack.Screen name="Audio" component={Audio} />
      <Stack.Screen name="Video" component={Video} />
      <Stack.Screen name="Eq" component={Eq} />
      <Stack.Screen name="Hgmi" component={Hgmi} />
      <Stack.Screen name="Aq" component={Aq} />
      
    </Stack.Navigator>
  );
}


