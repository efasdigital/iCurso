import React from 'react';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import styles from '../styles/MainStyle';


export default function Register({navigation}) {

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
        placeholder="Nome"
        autoCorrect={false}
        onChangeText={()=>{}}
        />

        <TextInput
        style={styles.input}
        placeholder="E-mail"
        autoCorrect={false}
        onChangeText={()=>{}}
        keyboardType="email-address"
        />

        <TextInput
        style={styles.input}
        placeholder="CPF"
        autoCorrect={false}
        onChangeText={()=>{}}
        keyboardType="number-pad"
        returnKeyType="done"
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
          >Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

