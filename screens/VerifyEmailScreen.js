import React from 'react';
import { View, Text, Button } from 'react-native';

const VerifyEmailScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Verifique seu e-mail para redefinir a senha</Text>
      <Button title="Voltar ao Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default VerifyEmailScreen;