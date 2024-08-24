import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';

// Obtém a altura da tela
const { height } = Dimensions.get('window');

const SecondScreen = ({ navigation }) => {
  // Estado para controlar qual botão está pressionado
  const [pressedButton, setPressedButton] = useState(null);

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
      >
        {/* Seção de boas-vindas */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Bem-vindo de volta ao Hike Now!</Text>
        </View>

        {/* Seção de formulário */}
        <View style={styles.formSection}>
          <TextInput 
            placeholder="E-mail" 
            style={styles.input} 
          />
          <View style={styles.passwordContainer}>
            <TextInput 
              placeholder="Senha" 
              secureTextEntry 
              style={styles.input} 
            />
            <TouchableOpacity
              style={styles.forgotPasswordContainer}
              onPress={() => alert('Redirecionar para recuperação de senha')}
            >
              <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              pressedButton === 'entrar' ? styles.buttonPressed : {}
            ]}
            activeOpacity={1} // Remove a mudança de opacidade ao pressionar
            onPressIn={() => setPressedButton('entrar')} // Define qual botão está pressionado
            onPressOut={() => setPressedButton(null)} // Restaura o estado quando solto
            onPress={() => alert('Logado com sucesso!')}
          >
            <Text style={[
              styles.buttonText,
              pressedButton === 'entrar' ? styles.buttonTextPressed : {}
            ]}>Entrar</Text>
          </TouchableOpacity>
          
          {/* Linha com "ou" */}
          <View style={styles.lineWithText}>
            <View style={styles.line} />
            <Text style={styles.orText}>ou</Text>
            <View style={styles.line} />
          </View>

          {/* Botões adicionais com ícones */}
          <View style={styles.additionalButtonsContainer}>
            <TouchableOpacity
              style={[
                styles.buttonContainer,
                styles.additionalButton,
                styles.button1 // Estilo específico para o botão 1
              ]}
              activeOpacity={1} // Remove a mudança de opacidade ao pressionar
              onPress={() => alert('Botão 1 pressionado')}
            >
              <View style={styles.buttonContent}>
                <Image source={require('../assets/google.png')} style={styles.icon} />
                <Text style={styles.buttonText}>Continue com Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonContainer,
                styles.additionalButton,
                styles.button2 // Estilo específico para o botão 2
              ]}
              activeOpacity={1} // Remove a mudança de opacidade ao pressionar
              onPress={() => alert('Botão 2 pressionado')}
            >
              <View style={styles.buttonContent}>
                <Image source={require('../assets/facebook.png')} style={styles.icon} />
                <Text style={styles.buttonText}>Continue com Facebook</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#344E41', // Cor de fundo geral
  },
  scrollView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1, // Ajusta para ocupar o espaço necessário
  },
  welcomeSection: {
    flex: 1, // Ocupa a parte superior da tela
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    color:'#DBD8CE',
  },
  formSection: {
    flex: 1, // Ajusta o espaço disponível
    backgroundColor: '#fff', // Fundo branco
    borderTopLeftRadius: 20, // Bordas arredondadas na parte superior
    borderTopRightRadius: 20,
    padding: 20,
    justifyContent: 'flex-start', // Alinha verticalmente os elementos no início
    alignItems: 'center', // Alinha horizontalmente os elementos
  },
  input: {
    height: 43,
    borderColor: '#0042471A',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 15,
    borderRadius: 22,
    backgroundColor: '#0042471A',
  },
  passwordContainer: {
    width: '100%',
    position: 'relative',
  },
  forgotPasswordContainer: {
    position: 'absolute',
    right: 0,
    bottom: -6, // Ajusta a posição vertical para baixo do campo de senha
    paddingHorizontal: 10,
  },
  forgotPasswordText: {
    color: '#344E41',
    fontSize: 14,
  },
  buttonContainer: {
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, // Adiciona sombra para Android
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15, // Ajusta o espaço entre o ícone e o texto
  },
  buttonText: {
    fontSize: 16,
    color: '#344E41', // Texto verde dos botões
    textAlign: 'center',
  },
  buttonPressed: {
    backgroundColor: '#A3B18A', // Verde mais claro para o efeito pressionado
  },
  buttonTextPressed: {
    color: '#fff', // Texto branco quando o botão está pressionado
  },
  lineWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20, // Espaçamento vertical
    width: '100%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 10, // Espaçamento horizontal
    fontSize: 16,
    color: '#344E41',
  },
  additionalButtonsContainer: {
    flexDirection: 'column', // Alinha os botões em coluna
    width: '100%',
  },
  additionalButton: {
    marginVertical: 5, // Espaçamento vertical entre os botões
  },
  button1: {
    marginRight: 0, // Margem específica para o botão 1
  },
  button2: {
    marginRight: 0, // Margem específica para o botão 2
  },
});

export default SecondScreen;
