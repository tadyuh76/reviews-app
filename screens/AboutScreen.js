import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { globalStyles } from './styles';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut
        commodo tellus, sit amet tincidunt turpis. Donec nisi lorem, mattis quis
        mattis sit amet, ultrices a odio. Nam facilisis fringilla egestas.
        Praesent lacinia libero massa, a imperdiet erat tincidunt ac. Praesent
        dictum, eros convallis aliquet mattis, augue enim scelerisque tellus,
        non sollicitudin elit elit non lacus. Etiam feugiat sapien eget interdum
        scelerisque. Etiam at condimentum ligula. Fusce condimentum nibh
        hendrerit enim dignissim elementum.
      </Text>
    </View>
  );
}
