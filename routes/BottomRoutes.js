import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../screens/Home';
import Players from '../screens/Players'
import Standing from '../screens/Standing'
import Stats from '../screens/Stats'
import Teams from '../screens/Teams'

const Tab = createMaterialBottomTabNavigator();

function BottomRoutes() {
  return (
    <NavigationContainer>
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="white"
        inactiveColor="white"
        
    >
      <Tab.Screen name="Home" component={Home}
         options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon name="home" size={20} color="#fff"/>
          ),
        }}
      />

      <Tab.Screen name="Standing" component={Standing}
          options={{
            tabBarLabel: 'Standing',
            tabBarIcon: () => (
                <Icon name="bar-chart-o" size={20} color="#fff"  />
            ),
          }}
       />

      <Tab.Screen name="Players" component={Players}
        options={{
            tabBarLabel: 'Players',
            tabBarIcon: () => (
                <Icon name="user" size={20} color="#fff"  />
            ),
          }}
      />

    <Tab.Screen name="Teams" component={Teams}
            options={{
                tabBarLabel: 'Teams',
                tabBarIcon: () => (
                    <Icon name="users" size={20} color="#fff" />
                ),
            }}
        
        />

      <Tab.Screen name="Stats" component={Stats}
         options={{
            tabBarLabel: 'Stats',
            tabBarIcon: () => (
                <Icon name="area-chart" size={20} color="#fff"  />
            ),
          }}
      />

   

    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomRoutes