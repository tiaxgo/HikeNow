import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

// Obtém a altura da tela
const { height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  // Estado para controlar qual botão está pressionado
  const [pressedButton, setPressedButton] = useState(null);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <View style={styles.overlay} />
      <View style={styles.loginContainer}>
        <Text style={styles.welcomeText}>Bem-vindo!</Text>
        <Text style={styles.descriptionText}>
          Prepare-se para explorar as trilhas mais incríveis e viver aventuras inesquecíveis.
        </Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              pressedButton === 'cadastrar' ? styles.buttonPressed : {}
            ]}
            activeOpacity={1} // Remove a mudança de opacidade ao pressionar
            onPressIn={() => setPressedButton('cadastrar')} // Define qual botão está pressionado
            onPressOut={() => setPressedButton(null)} // Restaura o estado quando solto
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={[
              styles.buttonText,
              pressedButton === 'cadastrar' ? styles.buttonTextPressed : {}
            ]}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              pressedButton === 'entrar' ? styles.buttonPressed : {}
            ]}
            activeOpacity={1} // Remove a mudança de opacidade ao pressionar
            onPressIn={() => setPressedButton('entrar')} // Define qual botão está pressionado
            onPressOut={() => setPressedButton(null)} // Restaura o estado quando solto
            onPress={() => navigation.navigate('SecondScreen')}
          >
            <Text style={[
              styles.buttonText,
              pressedButton === 'entrar' ? styles.buttonTextPressed : {}
            ]}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 120,
    position: 'absolute',
    top: 100, // Ajuste a posição do logo conforme necessário
    alignSelf: 'center', // Centraliza horizontalmente
  },
  overlay: {
    flex: 1,
  },
  loginContainer: {
    position: 'absolute', // Para fixar na parte inferior
    bottom: 0,
    width: '100%',
    height: height / 3, // Ocupa a parte inferior da tela
    backgroundColor: '#344E41', // Fundo verde
    borderTopLeftRadius: 20, // Bordas arredondadas na parte superior
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'flex-start', // Alinha os itens ao início (esquerda)
    justifyContent: 'center', // Alinha o conteúdo ao centro verticalmente
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#DBD8CE',
    marginBottom: 20,
    alignSelf: 'flex-start', // Alinha o texto à esquerda
    marginTop: -40 // Ajusta a distância do topo
  },
  descriptionText: {
    fontSize: 16,
    color:'#DBD8CE',
    textAlign: 'left',
    marginBottom: 20, // Ajusta o espaço abaixo do texto de descrição
    width: '100%', // Garante que o texto use toda a largura disponível
  },
  buttonRow: {
    flexDirection: 'row', // Coloca os botões um ao lado do outro
    justifyContent: 'center', // Espaço entre os botões
    width: '100%', // Garante que os botões usem toda a largura disponível
  },
  buttonContainer: {
    backgroundColor: '#fff', // Fundo branco do botão
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 40, // Ajusta a largura dos botões para ficarem iguais
    marginHorizontal: 10, // Espaço entre os botões
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#344E41', // Texto do botão verde 
    fontWeight: '600',
  },
  buttonPressed: {
    backgroundColor: '#A3B18A', // Cor verde mais clara para o efeito pressionado
  },
  buttonTextPressed: {
    color: '#fff', // Texto branco quando o botão está pressionado
  },
});

export default HomeScreen;
