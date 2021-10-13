import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../screens/Home'
import Standing from '../screens/Standing';

import Header from '../components/Header';
import Players from '../screens/Players';
import Teams from '../screens/Teams';
import Stats from '../screens/Stats';


const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ 
          headerStyle: {
            backgroundColor: '#0054a4',
            color:'#fff'
          },
          headerTitle:() => <Header />}}
        />
        

        <Stack.Screen name="Standing" component={Standing}
           options={{ 
            headerStyle: {
              backgroundColor: '#0054a4'
            },
            headerTintColor: '#fff'
          }}
        />

        <Stack.Screen name="Players" component={Players}
           options={{ 
            headerStyle: {
              backgroundColor: '#0054a4'
            },
            headerTintColor: '#fff'
          }}
        />

      <Stack.Screen name="Teams" component={Teams}
           options={{ 
            headerStyle: {
              backgroundColor: '#0054a4'
            },
            headerTintColor: '#fff'
          }}
        />

        <Stack.Screen name="Stats" component={Stats}
           options={{ 
            headerStyle: {
              backgroundColor: '#0054a4'
            },
            headerTintColor: '#fff'
          }}
        />


      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default StackRoutes