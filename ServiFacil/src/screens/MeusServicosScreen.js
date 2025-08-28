
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

export default function MeusServicosScreen({ navigation }) {
  const filtros = [
    { key: 'todos', label: 'Todos' },
    { key: 'concluido', label: 'Concluídos' },
    { key: 'andamento', label: 'Em andamento' },
    { key: 'afazer', label: 'A fazer' },
  ];
  const [filtro, setFiltro] = useState('todos');  
  // Simulação de dados
  const servicos = [
    { nome: 'Instalação elétrica', status: 'concluido', valor: 200 },
    { nome: 'Troca de fiação', status: 'andamento', valor: 150 },
    { nome: 'Vistoria elétrica', status: 'afazer', valor: 120 },
    { nome: 'Pintura de parede', status: 'concluido', valor: 300 },
    { nome: 'Limpeza pós-obra', status: 'concluido', valor: 180 },
  ];
  const filtrados = filtro === 'todos' ? servicos : servicos.filter(s => s.status === filtro);
  // Simulação de receita
  const receita = servicos.filter(s => s.status === 'concluido').reduce((acc, s) => acc + s.valor, 0);

  // Dados para o gráfico
  const graficoData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        data: [1200, 900, 1500, 800, 1100, receita],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltar}>
        <Text style={styles.voltarText}>← Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.titulo}>Meus Serviços</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtrosScroll} contentContainerStyle={styles.filtros}>
        {filtros.map(f => (
          <TouchableOpacity
            key={f.key}
            onPress={() => setFiltro(f.key)}
            style={[styles.filtroBtn, filtro === f.key && styles.filtroAtivo]}
          >
            <Text style={[styles.filtroTexto, filtro === f.key && styles.filtroTextoAtivo]}>{f.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {filtrados.map((s, i) => (
        <View key={i} style={styles.servicoCard}>
          <Text style={styles.servicoNome}>{s.nome}</Text>
          <Text style={styles.servicoStatus}>Status: {s.status}</Text>
          <Text style={styles.servicoValor}>Valor: R$ {s.valor}</Text>
        </View>
      ))}
      <Text style={styles.titulo}>Relatório Financeiro</Text>
      <View style={styles.graficoBox}>
        <BarChart
          data={graficoData}
          width={Dimensions.get('window').width - 48}
          height={180}
          yAxisLabel={'R$ '}
          chartConfig={{
            backgroundColor: '#e0e0e0',
            backgroundGradientFrom: '#e0e0e0',
            backgroundGradientTo: '#e0e0e0',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(45, 74, 124, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(45, 74, 124, ${opacity})`,
            style: { borderRadius: 12 },
            propsForBackgroundLines: { stroke: '#ccc' },
          }}
          style={{ borderRadius: 12 }}
        />
        <Text style={{ color: '#2d4a7c', fontWeight: 'bold', fontSize: 18, marginTop: 8 }}>Total: R$ {receita}</Text>
        <Text style={{ color: '#888', fontSize: 13 }}>(Filtre por dia, mês, ano...)</Text>
      </View>
      <View style={styles.rodape}>
        <Text style={styles.rodapeText}>Desenvolvido por Cleber Delgado 48-999019525</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rodape: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 8,
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
    marginBottom: 12,
  },
  voltar: {
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  voltarText: {
    color: '#2d4a7c',
    fontSize: 16,
  },
  filtrosScroll: {
    marginBottom: 16,
    maxHeight: 44,
  },
  filtros: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
  },
  filtroBtn: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#e0e7ef',
  },
  filtroAtivo: {
    backgroundColor: '#2d4a7c',
  },
  filtroTexto: {
    color: '#2d4a7c',
    fontWeight: 'bold',
  },
  filtroTextoAtivo: {
    color: '#fff',
    fontWeight: 'bold',
  },
  servicoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  servicoNome: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222d3d',
  },
  servicoStatus: {
    color: '#888',
    fontSize: 14,
  },
  servicoValor: {
    color: '#28a745',
    fontWeight: 'bold',
    fontSize: 15,
  },
  graficoBox: {
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
});
