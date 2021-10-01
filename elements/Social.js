import * as React from 'react';
import { Text, Linking, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MySocial = () => {
    
    return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 40 }}>
        <Text onPress={() => { 
                    Linking.openURL('https://facebook.com'); 
                    }}>
            <Icon name="facebook" style={stylesElement.facebook} /> 
        </Text>
        <Text onPress={() => { 
                    Linking.openURL('https://instagram.com'); 
                    }}>
            <Icon name="instagram" style={stylesElement.instagram} />
        </Text>
        <Text onPress={() => { 
                    Linking.openURL('https://youtube.com'); 
                    }}>
            <Icon name="youtube" style={stylesElement.youtube} />
        </Text>
        <Text onPress={() => { 
                    Linking.openURL('https://twitter.com'); 
                    }}>
            <Icon name="twitter" style={stylesElement.twitter} />
        </Text>
    </View>
  );
};

const stylesElement = StyleSheet.create({
    facebook: {
        fontSize: 35,
        margin: 20,
        fontWeight: 'bold',
        color: '#3b5998'
    },
    instagram: {
        fontSize: 35,
        padding: 25,
        marginRight: 20,
        fontWeight: 'bold',
        color: '#993399'
    },
    youtube: {
        fontSize: 35,
        padding: 25,
        marginRight: 20,
        fontWeight: 'bold',
        color: '#c4302b'
    },
    twitter: {
        fontSize: 35,
        padding: 25,
        marginRight: 20,
        fontWeight: 'bold',
        color: '#00acee'
    },
});

export default MySocial;