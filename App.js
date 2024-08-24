import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import VerifyEmailScreen from './screens/VerifyEmailScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
<Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
