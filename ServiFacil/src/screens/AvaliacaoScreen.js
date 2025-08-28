import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export default function AvaliacaoScreen({ navigation }) {
  const [nota, setNota] = useState(0);
  const [comentario, setComentario] = useState('');

  const enviarAvaliacao = () => {
    if (!nota) {
      alert('Por favor, selecione uma nota.');
      return;
    }
    alert(`Avaliação enviada!\nNota: ${nota}\nComentário: ${comentario || 'Sem comentário'}`);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltar}>
        <Text style={styles.voltarText}>← Voltar</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.title}>Avaliar Prestador</Text>
        <Text style={styles.label}>Profissional: <Text style={styles.bold}>João Silva</Text></Text>
        <Text style={styles.label}>Serviço: <Text style={styles.bold}>Instalação elétrica</Text></Text>
        <Text style={styles.label}>Nota:</Text>
        <View style={styles.estrelas}>
          {[5,4,3,2,1].map((n) => (
            <TouchableOpacity key={n} onPress={() => setNota(n)}>
              <Text style={[styles.estrela, nota >= n && styles.estrelaAtiva]}>★</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.label}>Comentário:</Text>
        <TextInput
          style={styles.input}
          placeholder="Deixe seu feedback..."
          value={comentario}
          onChangeText={setComentario}
          multiline
          placeholderTextColor="#A0A0A0"
        />
        <TouchableOpacity style={styles.enviarBtn} onPress={enviarAvaliacao}>
          <Text style={styles.enviarBtnText}>Enviar Avaliação</Text>
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
  label: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#222d3d',
    fontSize: 15,
  },
  bold: {
    fontWeight: 'bold',
    color: '#2d4a7c',
  },
  estrelas: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    gap: 8,
    marginVertical: 10,
  },
  estrela: {
    fontSize: 32,
    color: '#ccc',
    marginHorizontal: 2,
  },
  estrelaAtiva: {
    color: '#ffc107',
  },
  input: {
    backgroundColor: '#f1f3f6',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 15,
    minHeight: 60,
    borderWidth: 0,
    color: '#222',
  },
  enviarBtn: {
    backgroundColor: '#28a745',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 10,
  },
  enviarBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
