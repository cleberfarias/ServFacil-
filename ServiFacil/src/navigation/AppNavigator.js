import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import HomeScreen from '../screens/HomeScreen';
import PerfilScreen from '../screens/PerfilScreen';
import PagamentoScreen from '../screens/PagamentoScreen';
import ChatScreen from '../screens/ChatScreen';
import AvaliacaoScreen from '../screens/AvaliacaoScreen';
import PerfilUsuarioScreen from '../screens/PerfilUsuarioScreen';
import PainelPrestadorScreen from '../screens/PainelPrestadorScreen';
import EditarPerfilScreen from '../screens/EditarPerfilScreen';
import MinhasSolicitacoesScreen from '../screens/MinhasSolicitacoesScreen';
import MeusServicosScreen from '../screens/MeusServicosScreen';
import AgendarServicoScreen from '../screens/AgendarServicoScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PainelPrestador" component={PainelPrestadorScreen} />
  <Stack.Screen name="Perfil" component={PerfilScreen} />
  <Stack.Screen name="EditarPerfil" component={EditarPerfilScreen} />
  <Stack.Screen name="MinhasSolicitacoes" component={MinhasSolicitacoesScreen} />
  <Stack.Screen name="MeusServicos" component={MeusServicosScreen} />
  <Stack.Screen name="Pagamento" component={PagamentoScreen} />
  <Stack.Screen name="Chat" component={ChatScreen} />
  <Stack.Screen name="Avaliacao" component={AvaliacaoScreen} />
  <Stack.Screen name="PerfilUsuario" component={PerfilUsuarioScreen} />
        <Stack.Screen name="AgendarServico" component={AgendarServicoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
