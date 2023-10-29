import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Signin from './src/screens/Signin';
import Onboarding from './src/screens/Onboarding';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

  <NavigationContainer>
    <Stack.Navigator screenOptions={{header:()=>null}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>

  )
}

export default App;