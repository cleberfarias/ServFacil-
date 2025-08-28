import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CadastroScreen({ navigation }) {
  const [tipo, setTipo] = useState('cliente');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [bio, setBio] = useState('');
  const [cep, setCep] = useState('');

  const handleCadastro = () => {
    // Aqui você pode integrar com backend
    alert('Cadastro realizado com sucesso!');
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ServiFácil</Text>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.tipoBox}>
        <TouchableOpacity onPress={() => setTipo('cliente')} style={[styles.tipoBtn, tipo === 'cliente' && styles.tipoAtivo]}>
          <Text style={tipo === 'cliente' ? styles.tipoAtivoText : styles.tipoText}>Cliente</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTipo('prestador')} style={[styles.tipoBtn, tipo === 'prestador' && styles.tipoAtivo]}>
          <Text style={tipo === 'prestador' ? styles.tipoAtivoText : styles.tipoText}>Prestador</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.input} placeholder="Nome completo" value={nome} onChangeText={setNome} placeholderTextColor="#A0A0A0" />
      <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" placeholderTextColor="#A0A0A0" />
      <TextInput style={styles.input} placeholder="Telefone" value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" placeholderTextColor="#A0A0A0" />
      <TextInput style={styles.input} placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry placeholderTextColor="#A0A0A0" />
      <TextInput style={styles.input} placeholder="CEP" value={cep} onChangeText={setCep} keyboardType="numeric" placeholderTextColor="#A0A0A0" />
      {tipo === 'prestador' && (
        <>
          <TextInput style={styles.input} placeholder="Especialidade / Categoria" value={especialidade} onChangeText={setEspecialidade} placeholderTextColor="#A0A0A0" />
          <TextInput style={[styles.input, { minHeight: 60 }]} placeholder="Bio profissional" value={bio} onChangeText={setBio} multiline placeholderTextColor="#A0A0A0" />
        </>
      )}
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Já tenho conta</Text>
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
  tipoBox: {
    flexDirection: 'row',
    marginBottom: 14,
    gap: 10,
  },
  tipoBtn: {
    backgroundColor: '#f1f3f6',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginRight: 8,
  },
  tipoAtivo: {
    backgroundColor: '#2d4a7c',
  },
  tipoText: {
    color: '#222d3d',
    fontWeight: '500',
    fontSize: 15,
  },
  tipoAtivoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
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
    backgroundColor: '#28a745',
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
  link: {
    color: '#2d4a7c',
    marginTop: 10,
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});
