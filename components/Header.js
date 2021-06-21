import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require('../assets/img/game_bg.png')}
      style={styles.container}>
      <MaterialIcons
        name="menu"
        size={30}
        color="black"
        onPress={openMenu}
        style={styles.icon}
      />

      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('../assets/img/heart_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingBottom: 12,
    zIndex: 0.1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 24,
    marginLeft: 6,
  },
  icon: {
    position: 'absolute',
    left: 16,
    bottom: 12,
  },
  logo: {
    width: 28,
    height: 28,
  },
});
