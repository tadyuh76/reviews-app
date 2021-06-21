import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function ({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btn}>
        <Text style={styles.btnTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "coral",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 30
  },
  btnTitle: {
    color: "white",
    fontFamily: "Poppins",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center"
  }
})
