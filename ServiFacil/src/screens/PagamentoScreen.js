import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function PagamentoScreen({ navigation }) {
  const [data, setData] = useState('');
  const [obs, setObs] = useState('');
  const [pagamento, setPagamento] = useState('Pix');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltar}>
        <Text style={styles.voltarText}>← Voltar</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.title}>Solicitar Orçamento</Text>
        <Text style={styles.label}>Serviço: <Text style={styles.bold}>Instalação elétrica residencial</Text></Text>
        <Text style={styles.label}>Profissional: <Text style={styles.bold}>João Silva</Text></Text>
        <Text style={styles.label}>Valor estimado: <Text style={styles.bold}>R$ 120,00</Text></Text>
        <Text style={styles.label}>Data desejada:</Text>
        <TextInput
          style={styles.input}
          placeholder="AAAA-MM-DD"
          value={data}
          onChangeText={setData}
          placeholderTextColor="#A0A0A0"
        />
        <Text style={styles.label}>Observações:</Text>
        <TextInput
          style={[styles.input, { minHeight: 60 }]}
          placeholder="Descreva detalhes importantes..."
          value={obs}
          onChangeText={setObs}
          multiline
          placeholderTextColor="#A0A0A0"
        />
        <Text style={styles.label}>Forma de Pagamento</Text>
        <View style={styles.pagamentoOpcoes}>
          {['Pix', 'Cartão', 'Dinheiro'].map((op) => (
            <TouchableOpacity
              key={op}
              style={[styles.radio, pagamento === op && styles.radioAtivo]}
              onPress={() => setPagamento(op)}
            >
              <Text style={{ color: pagamento === op ? '#fff' : '#333' }}>{op}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.finalizar} onPress={() => navigation.navigate('Chat')}>
          <Text style={styles.finalizarText}>Confirmar Contratação</Text>
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
  input: {
    backgroundColor: '#f1f3f6',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
    borderWidth: 0,
    color: '#222',
  },
  pagamentoOpcoes: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  radio: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginRight: 8,
  },
  radioAtivo: {
    backgroundColor: '#28a745',
  },
  finalizar: {
    backgroundColor: '#28a745',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 20,
  },
  finalizarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
