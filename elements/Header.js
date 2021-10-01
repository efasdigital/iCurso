import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MyHeader = () => {
    
    return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
        <Text style={stylesElement.titleHeader}>
            Olá Fulando, boa aula!
        </Text>
    </View>
  );
};

const stylesElement = StyleSheet.create({
    titleHeader: {
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default MyHeader;