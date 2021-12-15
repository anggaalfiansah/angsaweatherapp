/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabStack from './bottomTabNavigation';
import WelcomeScreen from '../page/Welcome';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={TabStack} />
      </Stack.Navigator>
    </>
  );
};

export default AppStack;
