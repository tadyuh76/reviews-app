import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/HomeScreen';
import Details from '../screens/DetailsScreen';
import Header from '../components/Header';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: (props) => (
            <Header {...props} title="Home" />
          ),
        }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={Details}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
}
