import React from 'react';
import { View, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput placeholder="E-mail" style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%' }} />
      <TextInput placeholder="Senha" secureTextEntry style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%' }} />
      <Button title="Entrar" onPress={() => navigation.navigate('Home')} />
      <Button title="Esqueceu a senha?" onPress={() => navigation.navigate('ForgotPassword')} />
    </View>
  );
};

export default LoginScreen;