import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaDeInicio from './screens/TelaDeInicio';
import ChecklistScreen from './screens/ChecklistScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaDeInicio">
        <Stack.Screen name="TelaDeInicio" component={TelaDeInicio} options={{ title: 'Início' }} />
        <Stack.Screen name="ChecklistScreen" component={ChecklistScreen} options={{ title: 'Check-list' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}