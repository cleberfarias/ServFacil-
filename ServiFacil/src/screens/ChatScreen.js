import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';

const mensagensIniciais = [
  { autor: 'Você', texto: 'Olá! Gostaria de confirmar o horário da visita.', tipo: 'cliente' },
  { autor: 'João', texto: 'Claro! Estou disponível amanhã às 14h.', tipo: 'prestador' },
];

export default function ChatScreen({ navigation }) {
  const [mensagens, setMensagens] = useState(mensagensIniciais);
  const [msg, setMsg] = useState('');

  const enviarMensagem = () => {
    if (!msg.trim()) return;
    setMensagens([...mensagens, { autor: 'Você', texto: msg, tipo: 'cliente' }]);
    setMsg('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltar}>
        <Text style={styles.voltarText}>← Voltar</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.title}>Chat com João Silva</Text>
        <ScrollView style={styles.chatBox} contentContainerStyle={{ paddingBottom: 10 }}>
          {mensagens.map((m, i) => (
            <View key={i} style={[styles.mensagem, m.tipo === 'cliente' ? styles.cliente : styles.prestador]}>
              <Text style={styles.autor}>{m.autor}:</Text>
              <Text>{m.texto}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua mensagem..."
            value={msg}
            onChangeText={setMsg}
            placeholderTextColor="#A0A0A0"
          />
          <TouchableOpacity style={styles.enviarBtn} onPress={enviarMensagem}>
            <Text style={{ color: '#fff' }}>Enviar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.finalizarBtn} onPress={() => navigation.navigate('Avaliacao')}>
          <Text style={styles.finalizarBtnText}>Finalizar e Avaliar</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#f8fafc',
    padding: 20,
  },
  voltar: {
    marginBottom: 10,
  },
  voltarText: {
    color: '#2d4a7c',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 22,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222d3d',
    marginBottom: 10,
  },
  chatBox: {
    backgroundColor: '#f1f3f6',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    maxHeight: 250,
  },
  mensagem: {
    marginBottom: 10,
    padding: 8,
    borderRadius: 8,
    maxWidth: '80%',
  },
  cliente: {
    alignSelf: 'flex-end',
    backgroundColor: '#e6f0ff',
  },
  prestador: {
    alignSelf: 'flex-start',
    backgroundColor: '#e9ffe6',
  },
  autor: {
    fontSize: 12,
    color: '#555',
    marginBottom: 2,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f3f6',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginRight: 8,
    borderWidth: 0,
    color: '#222',
  },
  enviarBtn: {
    backgroundColor: '#2d4a7c',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  finalizarBtn: {
    backgroundColor: '#28a745',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  finalizarBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
