/* eslint-disable prettier/prettier */
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../page/Home';
import Cuaca from '../../page/Cuaca';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: '6.5%',
          paddingBottom: '1.5%',
          paddingTop: '1%',
          backgroundColor: 'rgba(247, 252, 255, 1)',
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Beranda':
              iconName = focused ? 'ios-home' : 'ios-home-outline';
              break;
            case 'Cuaca':
              iconName = focused ? 'ios-cloud' : 'ios-cloud-outline';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ff99cc',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Beranda" component={Home} />
      <Tab.Screen name="Cuaca" component={Cuaca} />
    </Tab.Navigator>
  );
};

export default TabStack;
