import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Index from './screens/Index';
import Register from './screens/Register';
import Bonus from './screens/Bonus';
import Support from './screens/Support';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Entrar',
            headerTitleAlign: 'center',
          }}
        />
      <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Cadastrar',
            headerTitleAlign: 'center',
          }}
        />
      <Stack.Screen
          name="Index"
          component={Index}
          options={{
            headerShown: false
          }}
        />
      <Stack.Screen
          name="Bonus"
          component={Bonus}
          options={{
            headerShown: false
          }}
        />
      <Stack.Screen
          name="Support"
          component={Support}
          options={{
            headerShown: false
          }}
        />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}