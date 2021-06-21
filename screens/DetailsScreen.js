import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { globalStyles } from './styles';

export default function Details({ navigation, route }) {
  const { title, paragraph, rating } = route.params;

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>{title}</Text>
      <Text style={globalStyles.text}>{paragraph}</Text>
      <View
        style={{
          paddingVertical: 12,
          justifyContent: 'center',
          borderTopWidth: 1,
          borderTopColor: '#cbcbcb',
          flexDirection: 'row',
          marginTop: 16,
        }}>
        <Text style={globalStyles.text}>LmaoGamer rating: </Text>
        <View style={{ flexDirection: 'row' }}>
          {Array(rating)
            .fill()
            .map(() => (
              <Image source={require('../assets/img/rating-1.png')} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
}
