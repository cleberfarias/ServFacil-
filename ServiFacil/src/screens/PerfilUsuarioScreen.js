import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PerfilUsuarioScreen({ navigation }) {
  // Dados fictícios para exemplo
  const usuario = {
    nome: 'Cleber Delgado',
    email: 'cleber@email.com',
    telefone: '(11) 99999-9999',
    tipo: 'Cliente',
    cep: '01234-567',
    historico: [
      { servico: 'Instalação elétrica', prestador: 'João Silva', status: 'Concluído' },
      { servico: 'Design de logo', prestador: 'Maria Design', status: 'Avaliado' },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ServiFácil</Text>
      <Text style={styles.title}>Meu Perfil</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.valor}>{usuario.nome}</Text>
        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.valor}>{usuario.email}</Text>
        <Text style={styles.label}>Telefone:</Text>
        <Text style={styles.valor}>{usuario.telefone}</Text>
        <Text style={styles.label}>Tipo de conta:</Text>
        <Text style={styles.valor}>{usuario.tipo}</Text>
        <Text style={styles.label}>CEP:</Text>
        <Text style={styles.valor}>{usuario.cep}</Text>
        <TouchableOpacity style={styles.editarBtn}>
          <Text style={styles.editarBtnText}>Editar Dados</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Histórico de Serviços</Text>
      <View style={styles.historicoBox}>
        {usuario.historico.map((item, idx) => (
          <View key={idx} style={styles.historicoItem}>
            <Text style={styles.historicoServico}>{item.servico}</Text>
            <Text style={styles.historicoPrestador}>Prestador: {item.prestador}</Text>
            <Text style={styles.historicoStatus}>Status: {item.status}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.sairBtn} onPress={() => navigation.replace('Login')}>
        <Text style={styles.sairBtnText}>Sair</Text>
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
    padding: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222d3d',
    alignSelf: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222d3d',
    marginBottom: 16,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  label: {
    fontWeight: 'bold',
    color: '#222d3d',
    marginTop: 6,
  },
  valor: {
    color: '#444',
    marginBottom: 2,
    fontSize: 15,
  },
  editarBtn: {
    backgroundColor: '#2d4a7c',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    alignItems: 'center',
    marginTop: 14,
  },
  editarBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222d3d',
    marginBottom: 8,
  },
  historicoBox: {
    marginBottom: 18,
  },
  historicoItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.02,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  historicoServico: {
    fontWeight: 'bold',
    color: '#2d4a7c',
    fontSize: 15,
  },
  historicoPrestador: {
    color: '#444',
    fontSize: 14,
  },
  historicoStatus: {
    color: '#28a745',
    fontSize: 13,
    marginTop: 2,
  },
  sairBtn: {
    backgroundColor: '#6c757d',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  sairBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
