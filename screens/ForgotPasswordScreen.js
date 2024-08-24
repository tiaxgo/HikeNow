import React from 'react';
import { View, TextInput, Button } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput placeholder="E-mail" style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%' }} />
      <Button title="Continuar" onPress={() => navigation.navigate('VerifyEmail')} />
    </View>
  );
};

export default ForgotPasswordScreen;