import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Colors } from '../constants/colors';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
  const { userName, userEmail } = route.params;

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Deseja realmente sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          onPress: () => navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          }),
        },
      ]
    );
  };

  const goToRegister = () => {
    navigation.push('Register', {});
  };

  const goBackToLogin = () => {
    navigation.popToTop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Olá, {userName}!</Text>
            <Text style={styles.subtitle}>Bem-vindo ao seu perfil</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.userInfo}>
              <Text style={styles.label}>Nome:</Text>
              <Text style={styles.value}>{userName}</Text>
            </View>
            
            <View style={styles.userInfo}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{userEmail}</Text>
            </View>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton} onPress={goToRegister}>
              <Text style={styles.actionButtonText}>
                Ir para Cadastro (push)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} onPress={goBackToLogin}>
              <Text style={styles.actionButtonText}>
                Voltar ao Login (popToTop)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.navigationInfo}>
            <Text style={styles.infoTitle}>Métodos de Navegação Demonstrados:</Text>
            <Text style={styles.infoText}>• navigation.navigate() - Navegação normal</Text>
            <Text style={styles.infoText}>• navigation.push() - Adiciona tela na pilha</Text>
            <Text style={styles.infoText}>• navigation.goBack() - Volta uma tela</Text>
            <Text style={styles.infoText}>• navigation.popToTop() - Volta ao início</Text>
            <Text style={styles.infoText}>• navigation.reset() - Reseta a pilha</Text>
            <Text style={styles.infoText}>• Passagem de parâmetros entre telas</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  card: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 20,
    padding: 25,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  userInfo: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: Colors.textDark,
  },
  actions: {
    marginBottom: 30,
  },
  actionButton: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  actionButtonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  navigationInfo: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 15,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: Colors.gray,
    marginBottom: 5,
  },
});

export default HomeScreen;
