import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



import StackRoutes from './routes/StackRoutes';
import BottomRoutes from './routes/BottomRoutes';



export default function App() {
  return (
    <>
   <StackRoutes />
   <BottomRoutes />
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
