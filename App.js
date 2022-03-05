
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import logo from './src/assets/logo.png';



export default function App () {

  return (
    <SafeAreaView style={styles.backgroundStyle}>
        <Image 
          style={styles.logoImg}
          source={logo}/>
        <Text style={styles.title}>Olá, Welliton</Text>
          <Text style={styles.subtitle}>Encontre os melhores produtores</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  logoImg: {
    width:70,
    height: 28,
  },
  title: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 26,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
  }
});

