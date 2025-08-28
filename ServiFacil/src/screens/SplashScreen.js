import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logoImg} resizeMode="contain" />
      <Text style={styles.logo}>ServiFácil</Text>
      <Text style={styles.slogan}>Seu serviço a um toque de distância</Text>
      <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 30 }} />
      <View style={styles.rodape}>
        <Text style={styles.rodapeText}>Desenvolvido por Cleber Delgado 48 999019525</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rodape: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  rodapeText: {
    color: '#888',
    fontSize: 13,
    fontStyle: 'italic',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 10,
  },
  logoImg: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  slogan: {
    fontSize: 16,
    color: '#555',
  },
});
