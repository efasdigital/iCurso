import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../styles/MainStyle';

const Tab = createBottomTabNavigator();

export default function Bonus() {
    

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={styles.alertBonus} >
                <Text style={styles.alerttextTitleBonus}>
                    Próxima LIVE:
                </Text>
                <Text style={styles.alerttextBonus}>
                    10 de Outubro às 20h
                </Text>
            </View>
            
            <TouchableOpacity onPress={() => { 
                    Linking.openURL('https://www.google.com/search?q=ebook+gratuito&oq=ebook+gratutito'); 
                    }}>
                <Image source={require('../assets/images/ebook.png')} style={styles.containerImageEbook}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { 
                    Linking.openURL('https://whatsapp.com'); 
                    }}>
                <Image source={require('../assets/images/grupo.png')} style={styles.containerImageGrupo}/>
            </TouchableOpacity>

            <View>
                <Text style={styles.textTitleBonus}>
                    Link Importantes
                </Text>
                <Text 
                    style={styles.textLinkBonus} 
                    onPress={() => { 
                    Linking.openURL('https://reactnative.dev'); 
                    }}> 
                    • Site Oficial do React Native 
                </Text>
                <Text 
                    style={styles.textLinkBonus} 
                    onPress={() => { 
                    Linking.openURL('https://www.postman.com/'); 
                    }}> 
                    • Site Oficial do Postman 
                </Text> 
                <Text 
                    style={styles.textLinkBonus} 
                    onPress={() => { 
                    Linking.openURL('https://marvelapp.com/'); 
                    }}> 
                    • Site Oficial do Marvel
                </Text> 
                <Text 
                    style={styles.textLinkBonus} 
                    onPress={() => { 
                    Linking.openURL('https://github.com/'); 
                    }}> 
                    • Site Oficial do Git Hub 
                </Text> 
                <Text 
                    style={styles.textLinkBonus} 
                    onPress={() => { 
                    Linking.openURL('https://nestjs.com/'); 
                    }}> 
                    • Site Oficial do NestJS
                </Text> 
                <Text 
                    style={styles.textLinkBonus} 
                    onPress={() => { 
                    Linking.openURL('https://typeorm.io/#/'); 
                    }}> 
                    • Site Oficial do Type ORM
                </Text> 
            </View>

        </View>

      );
}
