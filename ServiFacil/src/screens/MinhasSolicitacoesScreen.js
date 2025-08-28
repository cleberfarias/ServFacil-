import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';

export default function MinhasSolicitacoesScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);
  // Simulação de agendamentos
  const agendamentos = [
    {
      id: '1',
      data: '2025-08-28',
      titulo: 'Limpeza Residencial',
      hora: '09:00',
      status: 'Confirmado',
      cliente: 'João Silva',
      endereco: 'Rua das Flores, 123',
      tipo: 'Limpeza',
    },
    {
      id: '2',
      data: '2025-08-29',
      titulo: 'Instalação Elétrica',
      hora: '14:00',
      status: 'Pendente',
      cliente: 'Maria Souza',
      endereco: 'Av. Brasil, 456',
      tipo: 'Elétrica',
    },
    {
      id: '3',
      data: '2025-08-30',
      titulo: 'Jardinagem',
      hora: '16:00',
      status: 'Confirmado',
      cliente: 'Carlos Lima',
      endereco: 'Rua Verde, 789',
      tipo: 'Jardinagem',
    },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltar}>
        <Text style={styles.voltarText}>← Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.titulo}>Minhas Solicitações</Text>
      <Text style={styles.subtitulo}>Veja abaixo seus serviços agendados.</Text>
      <FlatList
        data={agendamentos}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text style={styles.semAgendamento}>Nenhum serviço agendado.</Text>}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.agendamentoCard}
            onPress={() => {
              setAgendamentoSelecionado(item);
              setModalVisible(true);
            }}
          >
            <Text style={styles.agendamentoTitulo}>{item.titulo}</Text>
            <Text style={styles.agendamentoHora}>Data: {item.data} - Horário: {item.hora}</Text>
            <Text style={styles.agendamentoStatus}>Status: {item.status}</Text>
          </TouchableOpacity>
        )}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitulo}>Detalhes do Agendamento</Text>
            {agendamentoSelecionado && (
              <>
                <Text style={styles.modalLabel}>Cliente:</Text>
                <Text style={styles.modalValor}>{agendamentoSelecionado.cliente}</Text>
                <Text style={styles.modalLabel}>Tipo de Serviço:</Text>
                <Text style={styles.modalValor}>{agendamentoSelecionado.tipo}</Text>
                <Text style={styles.modalLabel}>Endereço:</Text>
                <Text style={styles.modalValor}>{agendamentoSelecionado.endereco}</Text>
                <Text style={styles.modalLabel}>Data e Hora:</Text>
                <Text style={styles.modalValor}>{agendamentoSelecionado.data} - {agendamentoSelecionado.hora}</Text>
                <Text style={styles.modalLabel}>Status:</Text>
                <Text style={styles.modalValor}>{agendamentoSelecionado.status}</Text>
              </>
            )}
            <TouchableOpacity style={styles.modalBotao} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalBotaoTexto}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  // ...existing code...
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  modalTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d4a7c',
    marginBottom: 16,
  },
  modalLabel: {
    fontWeight: 'bold',
    color: '#2d4a7c',
    marginTop: 8,
  },
  modalValor: {
    fontSize: 16,
    color: '#222d3d',
    marginBottom: 4,
  },
  modalBotao: {
    backgroundColor: '#2d4a7c',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginTop: 18,
  },
  modalBotaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  agendamentoCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  agendamentoTitulo: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222d3d',
  },
  agendamentoHora: {
    color: '#888',
    fontSize: 14,
  },
  agendamentoStatus: {
    color: '#2d4a7c',
    fontWeight: 'bold',
    fontSize: 14,
  },
  semAgendamento: {
    color: '#888',
    fontStyle: 'italic',
    marginBottom: 12,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#2d4a7c',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  voltar: {
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  voltarText: {
    color: '#2d4a7c',
    fontSize: 16,
  },
});
