import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo ao Hike Now!</Text>
      <Button title="Entrar" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default WelcomeScreen;