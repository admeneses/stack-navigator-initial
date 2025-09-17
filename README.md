# 📱 Stack Navigator

Um aplicativo React Native desenvolvido para demonstração dos conceitos de **Stack Navigator** em aula.

## 🎯 Objetivo

Este projeto foi criado para demonstrar de forma prática e visual os principais conceitos de navegação em React Native, incluindo:

- Configuração do Stack Navigator
- Diferentes métodos de navegação
- Passagem de parâmetros entre telas
- Headers personalizados

## 🚀 Funcionalidades

### 🧭 Métodos de Navegação Demonstrados

| Método | Descrição | Uso no App |
|--------|-----------|------------|
| `navigation.navigate()` | Navegação normal entre telas | Login → Home, Register → Home |
| `navigation.push()` | Adiciona nova tela na pilha | Home → Register (demonstração) |
| `navigation.goBack()` | Volta uma tela na pilha | Register → Login |
| `navigation.popToTop()` | Volta para a primeira tela | Home → Login |
| `navigation.reset()` | Reseta toda a pilha de navegação | Logout → Login |

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework principal
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática
- **React Navigation** - Navegação entre telas
- **React Native Safe Area Context** - Gerenciamento de área segura

## 📦 Dependências

```json
{
  "@react-navigation/native": "^6.x",
  "@react-navigation/stack": "^6.x",
  "react-native-screens": "^3.x",
  "react-native-safe-area-context": "^4.x",
  "react-native-gesture-handler": "^2.x"
}
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI instalado globalmente

### Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>

# Navegue para o diretório
cd stack-navigator-initial

# Instale as dependências
npm install

# Inicie o projeto
npm start
```

### Executar no Dispositivo
```bash
# Android
npm run android

# iOS
npm run ios

# Web
npm run web
```

## 📁 Estrutura do Projeto

```
stack-navigator-initial/
├── src/
│   ├── navigation/
│   │   └── AppNavigator.tsx      # Configuração do Stack Navigator
│   └── screens/
│       ├── LoginScreen.tsx       # Tela de Login
│       ├── RegisterScreen.tsx    # Tela de Cadastro
│       └── HomeScreen.tsx        # Tela Home
├── App.tsx                       # Componente principal
├── package.json                  # Dependências do projeto
└── README.md                     # Este arquivo
```

## 🎓 Conceitos Demonstrados

### 1. **Configuração do Stack Navigator**
```typescript
const Stack = createStackNavigator<RootStackParamList>();

<Stack.Navigator
  initialRouteName="Login"
  screenOptions={{
    headerStyle: { backgroundColor: '#E91E63' },
    headerTintColor: '#fff',
  }}
>
```

### 2. **Tipagem de Parâmetros**
```typescript
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: { userName: string; userEmail: string };
};
```

### 3. **Navegação com Parâmetros**
```typescript
navigation.navigate('Home', {
  userName: name,
  userEmail: email,
});
```

### 4. **Recebimento de Parâmetros**
```typescript
const { userName, userEmail } = route.params;
```

### 5. **Diferentes Métodos de Navegação**
```typescript
// Navegação normal
navigation.navigate('Home');

// Adicionar à pilha
navigation.push('Register');

// Voltar uma tela
navigation.goBack();

// Voltar ao início
navigation.popToTop();

// Resetar pilha
navigation.reset({
  index: 0,
  routes: [{ name: 'Login' }],
});
```

## 🎨 Customização de Headers

```typescript
<Stack.Screen 
  name="Home" 
  component={HomeScreen}
  options={{ 
    title: 'Home',
    headerLeft: () => null, // Remove botão de voltar
  }}
/>
```

## 🔧 Configurações Importantes

### SafeAreaProvider
```typescript
<SafeAreaProvider>
  <NavigationContainer>
    {/* Stack Navigator */}
  </NavigationContainer>
</SafeAreaProvider>
```

### ScrollView Configuração
```typescript
<ScrollView 
  contentContainerStyle={styles.scrollContent}
  keyboardShouldPersistTaps="handled"
  showsVerticalScrollIndicator={false}
>
```

## 📄 Licença

Este projeto é de uso educacional.

---

**Desenvolvido para demonstração em aula de React Native** 🚀
