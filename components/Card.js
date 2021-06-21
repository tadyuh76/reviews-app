import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export default function Card({ children }) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#ddd',
        backgroundColor: 'white',
        margin: 16,
        minHeight: 80,
        flex: 1,
        
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      {children}
    </View>
  );
}
