import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RootDrawer from './src/Drawer';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontLoaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppin-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });
  return fontLoaded ? <RootDrawer /> : null;
}
