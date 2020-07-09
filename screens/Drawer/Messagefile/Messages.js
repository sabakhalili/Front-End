import React from 'react';
import Messagebox from '../Messagefile/Messagebox';
import Messageindi from '../Messagefile/Messageindi';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function Messages() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Messagebox" component={Messagebox} />
      <Stack.Screen name="Messageindi" component={Messageindi} />
    </Stack.Navigator>
  );
}