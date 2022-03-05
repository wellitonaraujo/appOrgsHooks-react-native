import React from 'react';
import { View, SafeAreaView, Image, Text } from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.png';
import { getProducers } from '../../services/data';

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
