import React from 'react';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import styles from '../styles/MainStyle';

export default function Login({navigation}) {

    const singin = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Index"}]
        })
    }

    const register = () => {
        navigation.navigate("Register")
    }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
        source={require('../assets/images/logo.png')}
        />
      </View>

      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="E-mail"
        autoCorrect={false}
        onChangeText={()=>{}}
        keyboardType="email-address"
        />

        <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={()=>{}}
        secureTextEntry={true}
        />
      
        <TouchableOpacity style={styles.btnSubmit} onPress={() => singin()}>
          <Text 
          style={styles.submitText}
          >Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister} onPress={() => register()}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

