import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Support from './Support';
import Bonus from './Bonus';
import MyComponent from '../elements/List';

function Principal() {
  return (
    <MyComponent></MyComponent>
  );
}

const Tab = createBottomTabNavigator();


export default function Index({navigation}) {

    const logout = () => {
        navigation.navigate("Login")
        return null;
    }

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#f55d5d',
      }}
    >
      <Tab.Screen
        name="Visão geral do iCurso"
        component={Principal}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Bônus"
        component={Bonus}
        options={{
          tabBarLabel: 'Bônus',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Suporte"
        component={Support}
        options={{
          tabBarLabel: 'Suporte',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="help-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={logout}
        options={{
          tabBarLabel: 'Sair',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

