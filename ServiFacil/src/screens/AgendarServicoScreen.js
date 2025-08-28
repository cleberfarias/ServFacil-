import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const horarios = ['09:00', '11:00', '14:00', '16:00', '18:00'];

export default function AgendarServicoScreen({ navigation }) {
  const [step, setStep] = useState(0);
  const [servico, setServico] = useState('');
  const [foto, setFoto] = useState(null);
  const [horario, setHorario] = useState('');

  // Simulação de upload de foto
  function handleFoto() {
    setFoto('https://via.placeholder.com/120');
    setStep(2);
  }

  function handleAgendar() {
    // Aqui salvaria o agendamento
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agendamento via ChatBot</Text>
      {step === 0 && (
        <>
          <Text style={styles.bot}>Olá! Qual serviço você deseja agendar?</Text>
          <TextInput
            style={styles.input}
            placeholder="Descreva o serviço..."
            value={servico}
            onChangeText={setServico}
          />
          <TouchableOpacity style={styles.btn} onPress={() => setStep(1)}>
            <Text style={styles.btnText}>Próximo</Text>
          </TouchableOpacity>
        </>
      )}
      {step === 1 && (
        <>
          <Text style={styles.bot}>Deseja enviar uma foto do local ou do problema?</Text>
          <View style={{ flexDirection: 'row', marginTop: 12 }}>
            <TouchableOpacity style={styles.btn} onPress={handleFoto}>
              <Text style={styles.btnText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => setStep(2)}>
              <Text style={styles.btnText}>Não</Text>
            </TouchableOpacity>
          </View>
          {foto && (
            <Image source={{ uri: foto }} style={styles.foto} />
          )}
        </>
      )}
      {step === 2 && (
        <>
          <Text style={styles.bot}>Escolha um horário para o serviço:</Text>
          <View style={styles.horariosBox}>
            {horarios.map(h => (
              <TouchableOpacity
                key={h}
                style={[styles.horarioBtn, horario === h && styles.horarioBtnAtivo]}
                onPress={() => setHorario(h)}
              >
                <Text style={[styles.horarioText, horario === h && styles.horarioTextAtivo]}>{h}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.btn} onPress={handleAgendar} disabled={!horario}>
            <Text style={styles.btnText}>Agendar</Text>
          </TouchableOpacity>
        </>
      )}
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
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d4a7c',
    marginBottom: 18,
    textAlign: 'center',
  },
  bot: {
    fontSize: 16,
    color: '#222d3d',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  btn: {
    backgroundColor: '#2d4a7c',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginTop: 10,
    marginRight: 10,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginTop: 12,
  },
  horariosBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginVertical: 12,
  },
  horarioBtn: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  horarioBtnAtivo: {
    backgroundColor: '#2d4a7c',
  },
  horarioText: {
    color: '#2d4a7c',
    fontWeight: 'bold',
  },
  horarioTextAtivo: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
