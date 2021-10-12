import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../screens/Home'
import Standing from '../screens/Standing';

import Header from '../components/Header';


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
        

        <Stack.Screen name="Standing" component={Standing} />

      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default StackRoutes