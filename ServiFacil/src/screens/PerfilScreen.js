import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function PerfilScreen({ navigation, route }) {
  // Recebe dados do prestador
  const prestador = route?.params?.prestador || {
    nome: 'João Silva',
    categoria: 'Eletricista',
    desc: 'Profissional com 5 anos de experiência em instalações elétricas residenciais e comerciais.',
    foto: 'https://randomuser.me/api/portraits/men/32.jpg',
    servico: 'Instalação e manutenção elétrica',
    servicoFoto: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  };
  // Foto do serviço (pode ser fixa ou vinda do prestador)
  const servicoFoto = prestador.servicoFoto || 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80';
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltar}>
        <Text style={styles.voltarText}>← Voltar</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <View style={{ alignItems: 'center', marginBottom: 16 }}>
          <Image source={{ uri: prestador.foto }} style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 8 }} />
          <Text style={styles.nome}>{prestador.nome}</Text>
          <Text style={styles.categoria}>{prestador.categoria}</Text>
        </View>
        <Text style={styles.descricao}>{prestador.desc}</Text>
        <Text style={styles.titulo}>Serviço em destaque</Text>
        <Image source={{ uri: servicoFoto }} style={{ width: '100%', height: 140, borderRadius: 12, marginBottom: 10 }} />
        <Text style={styles.titulo}>Serviços oferecidos</Text>
        <View style={styles.lista}>
          <Text style={styles.itemLista}>• {prestador.servico || 'Instalação de tomadas e disjuntores'}</Text>
          <Text style={styles.itemLista}>• Troca de fiação</Text>
          <Text style={styles.itemLista}>• Vistoria elétrica</Text>
        </View>
        <Text style={styles.titulo}>Preço médio</Text>
        <Text style={styles.preco}>R$ 120,00 por visita</Text>
        <TouchableOpacity style={styles.contratar} onPress={() => navigation.navigate('Pagamento')}>
          <Text style={styles.contratarText}>Solicitar Orçamento</Text>
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
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#222d3d',
  },
  categoria: {
    color: '#6c757d',
    marginBottom: 10,
    fontWeight: '500',
  },
  descricao: {
    marginBottom: 18,
    color: '#444',
    fontSize: 15,
  },
  titulo: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 4,
    color: '#222d3d',
    fontSize: 16,
  },
  lista: {
    marginBottom: 10,
    paddingLeft: 10,
  },
  itemLista: {
    color: '#444',
    fontSize: 15,
    marginBottom: 2,
  },
  preco: {
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#28a745',
    fontSize: 16,
  },
  contratar: {
    backgroundColor: '#28a745',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 10,
  },
  contratarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
