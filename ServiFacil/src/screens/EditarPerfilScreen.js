
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function EditarPerfilScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState(null);
  const [novoServico, setNovoServico] = useState('');
  const [valorServico, setValorServico] = useState('');

  // Função para simular upload de foto
  const handleFoto = () => {
    // Aqui você pode integrar com expo-image-picker
    alert('Simulação de upload de foto');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltar}>
        <Text style={styles.voltarText}>← Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.titulo}>Editar Perfil</Text>
      <TouchableOpacity onPress={handleFoto} style={styles.fotoBtn}>
        {foto ? (
          <Image source={{ uri: foto }} style={styles.foto} />
        ) : (
          <Text style={styles.fotoTexto}>Adicionar/Editar Foto</Text>
        )}
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />
      <Text style={styles.subtitulo}>Adicionar novo serviço</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do serviço"
        value={novoServico}
        onChangeText={setNovoServico}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor (R$)"
        value={valorServico}
        onChangeText={setValorServico}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Salvar</Text>
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
    backgroundColor: '#f8fafc',
    padding: 24,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d4a7c',
    marginBottom: 16,
    alignSelf: 'center',
  },
  fotoBtn: {
    alignSelf: 'center',
    marginBottom: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 50,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  voltar: {
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  voltarText: {
    color: '#2d4a7c',
    fontSize: 16,
  },
  subtitulo: {
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
    color: '#2d4a7c',
  },
  botao: {
    backgroundColor: '#2d4a7c',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 16,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
