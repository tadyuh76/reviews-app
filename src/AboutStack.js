import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/AboutScreen';
import Header from '../components/Header';

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          header: (props) => <Header {...props} title="About us" />,
        }}
      />
    </Stack.Navigator>
  );
}
