import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
const categorias = [
  'Todos',
  'TI',
  'Design',
  'Elétrica',
  'Encanamento',
  'Limpeza',
  'Jardinagem',
  'Pintura',
  'Aulas',
  'Reformas',
  'Beleza',
  'Transporte',
  'Eventos',
  'Saúde',
  'Consultoria',
];

const recomendados = [
  {
    nome: 'João Silva',
    desc: 'Eletricista profissional com 5 anos de experiência.',
    foto: 'https://randomuser.me/api/portraits/men/32.jpg',
    categoria: 'Elétrica',
    servico: 'Instalação e manutenção elétrica',
  },
  {
    nome: 'Maria Design',
    desc: 'Especialista em identidade visual e redes sociais.',
    foto: 'https://randomuser.me/api/portraits/women/44.jpg',
    categoria: 'Design',
    servico: 'Criação de logotipos e posts',
  },
  {
    nome: 'Carlos Encanador',
    desc: 'Encanador experiente em residências e empresas.',
    foto: 'https://randomuser.me/api/portraits/men/45.jpg',
    categoria: 'Encanamento',
    servico: 'Conserto de vazamentos',
  },
  {
    nome: 'Ana Limpeza',
    desc: 'Limpeza residencial e comercial com agilidade.',
    foto: 'https://randomuser.me/api/portraits/women/65.jpg',
    categoria: 'Limpeza',
    servico: 'Limpeza pós-obra',
  },
  {
    nome: 'Pedro Jardineiro',
    desc: 'Jardinagem e paisagismo para seu lar.',
    foto: 'https://randomuser.me/api/portraits/men/51.jpg',
    categoria: 'Jardinagem',
    servico: 'Corte de grama e poda',
  },
  {
    nome: 'Juliana Professora',
    desc: 'Aulas particulares de matemática e física.',
    foto: 'https://randomuser.me/api/portraits/women/23.jpg',
    categoria: 'Aulas',
    servico: 'Aulas de reforço escolar',
  },
  {
    nome: 'Lucas Pintor',
    desc: 'Pintura residencial e comercial.',
    foto: 'https://randomuser.me/api/portraits/men/61.jpg',
    categoria: 'Pintura',
    servico: 'Pintura de paredes e fachadas',
  },
  {
    nome: 'Fernanda Cabeleireira',
    desc: 'Cortes, penteados e coloração.',
    foto: 'https://randomuser.me/api/portraits/women/12.jpg',
    categoria: 'Beleza',
    servico: 'Corte e escova',
  },
];

export default function HomeScreen({ navigation }) {
  const [busca, setBusca] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  // Filtra por categoria e busca
  const filtrados = recomendados.filter((rec) => {
    const buscaLower = busca.toLowerCase();
    const matchBusca =
      rec.nome.toLowerCase().includes(buscaLower) ||
      rec.servico.toLowerCase().includes(buscaLower) ||
      rec.categoria.toLowerCase().includes(buscaLower);
    const matchCategoria = categoriaSelecionada === 'Todos' || rec.categoria === categoriaSelecionada;
    return matchBusca && matchCategoria;
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.logo}>ServiFácil</Text>
        <TouchableOpacity style={styles.sairBtn} onPress={() => navigation.replace('Login')}>
          <Text style={styles.sairBtnText}>Sair</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.inputBusca}
        placeholder="Ex: encanador, designer, TI..."
        value={busca}
        onChangeText={setBusca}
        placeholderTextColor="#A0A0A0"
      />
      <Text style={styles.sectionTitle}>Buscar Serviços</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriasScroll} contentContainerStyle={styles.categorias}>
        {categorias.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.categoriaBtn, categoriaSelecionada === cat && { backgroundColor: '#2d4a7c' }]}
            onPress={() => setCategoriaSelecionada(cat)}
          >
            <Text style={[styles.categoriaText, categoriaSelecionada === cat && { color: '#fff' }]}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={styles.sectionTitle}>Recomendações</Text>
      <View style={styles.cards}>
        {filtrados.map((rec) => (
          <View key={rec.nome} style={styles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
              <Image
                source={{ uri: rec.foto }}
                style={{ width: 56, height: 56, borderRadius: 28, marginRight: 12 }}
              />
              <View>
                <Text style={styles.cardNome}>{rec.nome}</Text>
                <Text style={{ color: '#888', fontSize: 13 }}>{rec.categoria} - {rec.servico}</Text>
              </View>
            </View>
            <Text style={styles.cardDesc}>{rec.desc}</Text>
            <TouchableOpacity style={styles.cardBtn} onPress={() => navigation.navigate('Perfil', { prestador: rec })}>
              <Text style={styles.cardBtnText}>Ver Perfil</Text>
            </TouchableOpacity>
          </View>
        ))}
        {filtrados.length === 0 && (
          <Text style={{ color: '#888', textAlign: 'center', marginTop: 20 }}>Nenhum serviço encontrado.</Text>
        )}
      </View>
      <View style={styles.rodape}>
        <Text style={styles.rodapeText}>Desenvolvido por Cleber Delgado 48 999019525</Text>
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
  sairBtn: {
    backgroundColor: '#e53935',
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginLeft: 8,
  },
  sairBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    padding: 20,
    backgroundColor: '#f8fafc',
    minHeight: '100%',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222d3d',
    alignSelf: 'center',
    marginBottom: 18,
    marginTop: 10,
  },
  inputBusca: {
    backgroundColor: '#f1f3f6',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 18,
    borderWidth: 0,
    color: '#222',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222d3d',
    marginBottom: 10,
    marginTop: 10,
  },
  categoriasScroll: {
    marginBottom: 18,
    maxHeight: 48,
  },
  categorias: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
  },
  categoriaBtn: {
    backgroundColor: '#f1f3f6',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginRight: 8,
  },
  categoriaText: {
    color: '#222d3d',
    fontWeight: '500',
    fontSize: 15,
  },
  cards: {
    gap: 18,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardNome: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#222d3d',
    marginBottom: 4,
  },
  cardDesc: {
    color: '#444',
    marginBottom: 12,
    fontSize: 15,
  },
  cardBtn: {
    backgroundColor: '#2d4a7c',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignSelf: 'flex-end',
  },
  cardBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
