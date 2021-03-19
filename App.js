import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// |> routes
import Routes from './src/routes/routes';

export default function App() {
  return (
      <NavigationContainer>
        <Routes />
        <StatusBar style="auto" />
      </NavigationContainer>
  );
}