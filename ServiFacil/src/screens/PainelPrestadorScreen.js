import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PainelPrestadorScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Painel do Prestador</Text>
      <Text style={styles.subtitulo}>Gerencie seus serviços, perfil e solicitações</Text>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('EditarPerfil')}>
        <Text style={styles.botaoTexto}>Ver/Editar Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('MinhasSolicitacoes')}>
        <Text style={styles.botaoTexto}>Minhas Solicitações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('MeusServicos')}>
        <Text style={styles.botaoTexto}>Meus Serviços</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.replace('Login')}>
        <Text style={styles.botaoTexto}>Sair</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d4a7c',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
  },
  botao: {
    backgroundColor: '#2d4a7c',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
