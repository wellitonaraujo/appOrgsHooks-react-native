import React from 'react';
import { View, SafeAreaView, Image, Text, StyleSheet } from 'react-native';

import logo from '../../assets/logo.png'

export default function Home() {
 return (
    <SafeAreaView style={styles.backgroundStyle}>
    <Image 
      style={styles.logoImg}
      source={logo}/>
    <Text style={styles.title}>Olá, Wellitonnn</Text>
      <Text style={styles.subtitle}>Encontre os melhores produtores</Text>
    </SafeAreaView>
  );
}

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