import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('cliente'); // 'cliente' ou 'prestador'

  const handleLogin = () => {
    // Aqui você pode adicionar autenticação real
    if (tipo === 'prestador') {
      navigation.replace('PainelPrestador');
    } else {
      navigation.replace('Home', { tipo: 'cliente' });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ServiFácil</Text>
      <Text style={styles.title}>Entrar na sua conta</Text>
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <TouchableOpacity
          style={[styles.tipoBtn, tipo === 'cliente' && styles.tipoBtnAtivo]}
          onPress={() => setTipo('cliente')}
        >
          <Text style={[styles.tipoBtnText, tipo === 'cliente' && styles.tipoBtnTextAtivo]}>Cliente</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tipoBtn, tipo === 'prestador' && styles.tipoBtnAtivo]}
          onPress={() => setTipo('prestador')}
        >
          <Text style={[styles.tipoBtnText, tipo === 'prestador' && styles.tipoBtnTextAtivo]}>Prestador</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="E-mail / Telefone"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.secondaryButtonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>
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
    backgroundColor: '#f8fafc',
    padding: 24,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222d3d',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222d3d',
    marginBottom: 18,
  },
  input: {
    width: '100%',
    backgroundColor: '#f1f3f6',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 14,
    borderWidth: 0,
    color: '#222',
  },
  button: {
    backgroundColor: '#2d4a7c',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#6c757d',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  secondaryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#2d4a7c',
    marginTop: 10,
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  tipoBtn: {
    flex: 1,
    backgroundColor: '#f1f3f6',
    borderRadius: 12,
    paddingVertical: 10,
    marginHorizontal: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d0d0d0',
  },
  tipoBtnAtivo: {
    backgroundColor: '#2d4a7c',
    borderColor: '#2d4a7c',
  },
  tipoBtnText: {
    color: '#2d4a7c',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tipoBtnTextAtivo: {
    color: '#fff',
  },
});
