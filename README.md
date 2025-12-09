# ServiFacil

ServiFacil é um aplicativo cliente (mobile + web) construído com Expo e React Native, pensado para facilitar a conexão entre clientes e prestadores de serviço — agendamento, gerenciamento e visualização de informações. Este README foi criado a partir da análise dos arquivos do repositório e contém instruções práticas para rodar e desenvolver o projeto.

> Observação: a análise foi baseada nos arquivos disponíveis no repositório (ex.: package.json, app.js, pasta ServiFacil). Pode haver outros componentes ou integrações não visíveis na inspeção inicial. Veja também o package.json inspecionado: https://github.com/cleberfarias/ServFacil-/blob/2896e8e634b0894cdaf81ee2a39bdd50323d9549/package.json#L1-L27

Sumário
- Tecnologias detectadas
- Pré-requisitos
- Instalação
- Desenvolvimento (rodar localmente)
- Estrutura sugerida do projeto
- Dependências importantes
- Boas práticas e debugging
- Contribuição
- Licença e contato

Tecnologias detectadas
- Expo: ^53.0.20
- React: 18.2.0
- React Native: 0.73.8
- react-native-web: ~0.19.6 (suporte para web)
- React DOM: 18.2.0
- React Navigation: @react-navigation/native, @react-navigation/stack
- Bibliotecas UI/funcionais: react-native-calendars, react-native-chart-kit
- Babel: @babel/core (devDependency)
- Ferramenta de execução: Expo CLI (scripts definidos em package.json)

Pré-requisitos
- Node.js (recomendado >= 16)
- npm (ou yarn)
- Expo CLI (npm install -g expo-cli) — opcional mas recomendado
- Para rodar em dispositivo Android/iOS: Android Studio / Xcode (ou use Expo Go no dispositivo)
- Git

Instalação (local)
1. Clone o repositório:
   git clone https://github.com/cleberfarias/ServFacil-.git
2. Entre na pasta do projeto:
   cd Servifacil   # ajuste conforme o nome real da pasta se diferente
3. Instale dependências:
   npm install
   ou
   yarn

Observação: o package.json indica que este é um projeto Expo (main: node_modules/expo/AppEntry.js). Se o código estiver dentro da pasta `ServiFacil`, entre nela antes de executar npm install.

Scripts úteis (conforme package.json)
- npm run start — inicia o Metro/Expo (expo start)
- npm run android — abre no Android (expo start --android)
- npm run ios — abre no iOS (expo start --ios)
- npm run web — roda a versão web (expo start --web)

Rodando em desenvolvimento
1. Inicie o Metro/Expo:
   npm run start
2. Para testar no celular:
   - Abra o app Expo Go no seu telefone e escaneie o QR code mostrado no terminal/na página do Metro.
3. Para rodar no emulador:
   - Android: certifique-se que um emulador esteja em execução e rode npm run android
   - iOS: Xcode e simulador disponíveis; rode npm run ios
4. Para testar no navegador:
   npm run web

Estrutura esperada do repositório (detectada / sugerida)
- app.js — ponto de entrada (há um app.js no root)
- ServiFacil/ — pasta com o código da aplicação (componentes, telas, navegação)
- package.json / package-lock.json
- .gitignore
- .github/ — workflows (se houver)
Ajuste os caminhos se o código principal estiver dentro de `ServiFacil` ou em subpastas diferentes.

Dependências e onde elas costumam ser usadas
- @react-navigation/native e @react-navigation/stack — navegação entre telas
- react-native-calendars — telas de agendamento e seleção de datas
- react-native-chart-kit — dashboards ou relatórios visuais
- react-native-web e react-dom — para habilitar execução no navegador via Expo/Web
- @expo/metro-runtime — runtime do Expo

Boas práticas e dicas de desenvolvimento
- Use .env para variáveis sensíveis e nunca comite credenciais.
- Utilize o Expo Go para testes rápidos em dispositivos reais.
- Para builds de produção / publicação: siga a documentação do Expo (expo build / eas build).
- Se for adicionar backend, considere uma pasta separada (backend/) com API REST ou GraphQL.
- Mantenha o package.json consistente: prefira yarn.lock ou package-lock.json (não ambos).

Debugging e verificações rápidas
- Logs: use console.log e o DevTools do Expo.
- Limpe cache de Metro se houver problemas: expo start -c
- Verifique compatibilidade de versões (React Native + Expo) na documentação do Expo.
- Para problemas nativos ao usar bibliotecas não gerenciadas pelo Expo, considere usar EAS Build ou eject (expo eject) — somente se necessário.


Contribuição
1. Fork do repositório
2. Crie uma branch: git checkout -b feature/minha-feature
3. Faça commits pequenos e documentados
4. Abra um Pull Request descrevendo as mudanças
5. Execute os scripts locais e verifique se não quebrou funcionalidades



Contato
- Mantainer: cleberfarias  
- Repositório: https://github.com/cleberfarias/ServFacil-/

---
