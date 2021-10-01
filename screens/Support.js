import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, UselessTextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../styles/MainStyle';

const Tab = createBottomTabNavigator();

export default function Support() {
    return (
        <KeyboardAvoidingView style={styles.avoindingView}>
            <View>
                <View>
                    <Text style={styles.textTitleSupport}>Não fique com dúvidas!</Text>
                </View>
            
                <View>
                    <Text style={styles.textSubSupport}>Use o formulário abaixo para fazer suas perguntas ou enviar uma mensagem para os instrutores.</Text>
                </View>

                <View style={styles.containerSupport}>
                    <TextInput
                    style={styles.input}
                    placeholder="Assunto"
                    autoCorrect={false}
                    onChangeText={()=>{}}
                    />

                    <TextInput
                    style={styles.input}
                    placeholder="Digite aqui sua mensagem..."
                    multiline={true}
                    numberOfLines={10}
                    />

                    <TouchableOpacity style={styles.btnSubmit} onPress={() => singin()}>
                    <Text  
                    style={styles.submitText}
                    >Enviar</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.textFooterSupport}>Sua mensagem será respondida em até 48 horas. Enquanto isso aproveite para assistir mais vídeo aulas na plataforma!</Text>
                </View>
                
            </View>
        </KeyboardAvoidingView>
      );
}