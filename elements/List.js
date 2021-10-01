import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View, ScrollView, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MySocial from '../elements/Social';
import MyHeader from './Header';
import MyVideo from './Video';

const CONTENT = [
    {
        isExpanded: false,
        category_name: 'Boas vindas',
        subcategory: [
            {id: 1, name: 'Conheça o curso', time: 2.54}
        ]
    },
    {
        isExpanded: false,
        category_name: 'Iniciante',
        subcategory: [
            {id: 2, name: 'React Native - Install', time: 5.21},
            {id: 3, name: 'Primeiros passos', time: 7.14},
            {id: 4, name: 'NodeJS', time: 4.44},
            {id: 5, name: 'Desenvolvendo APP Simples', time: 34.24},
        ]
    },
    {
        isExpanded: false,
        category_name: 'Intermediário',
        subcategory: [
            {id: 6, name: 'JavaScript ou TypeScript', time: 8.21},
            {id: 7, name: 'Conceito de View', time: 3.14},
            {id: 8, name: 'Páginação', time: 8.45},
            {id: 9, name: 'Elementos', time: 19.11},
            {id: 10, name: 'Desenvolvendo APP Intermediário', time: 24.19},
        ]
    },
    {
        isExpanded: false,
        category_name: 'Avançado',
        subcategory: [
            {id: 11, name: 'Planejamento de execução', time: 10.21},
            {id: 12, name: 'UX Design', time: 23.14},
            {id: 13, name: 'Front-end e Back-end', time: 48.47},
            {id: 14, name: 'APP Final', time: 59.12},
        ]
    }
];

const ExpandableComponent = ({item, onClickFunction}) => {
    const [layoutHeight, setlayoutHeight] = useState(0);

    useEffect(() => {
        if (item.isExpanded) {
            setlayoutHeight(null);
        } else {
            setlayoutHeight(0);
        }
    }, [item.isExpanded])

    return (
        <View>
            <TouchableOpacity 
            style={stylesElement.item}
            onPress={onClickFunction}
            >
                <Text style={stylesElement.itemText}>
                    {item.category_name}
                </Text>
            </TouchableOpacity>
            <View style={{
                height: layoutHeight,
                overflow: 'hidden'
            }}>
                {
                    item.subcategory.map((item, key) => (
                        <TouchableOpacity
                            key={key}
                            style={stylesElement.content}
                        >
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={stylesElement.text}>
                                    {item.name} <Icon name="play-circle" size={14} color="#4c6ef5" />
                                </Text>
                                <Text style={stylesElement.time}>
                                    {item.time}
                                </Text>
                            </View>

                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
        
    )
}

const MyList = () => {

    const [multiSelect, setmultiSelect] = useState(false);
    const [listDataSource, setlistDataSource] = useState(CONTENT);
    
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        if (multiSelect) {
            array[index]['isExpanded'] = !array[index]['isExpanded'];
        } else {
            array.map((value, placeindex) => 
            placeindex === index
            ? (array[placeindex]['isExpanded']) = !array[placeindex]['isExpanded']
            : (array[placeindex]['isExpanded']) - false
            );
        }
        setlistDataSource(array)
    }
    
    return (
    <SafeAreaView style={{flex: 1}}>
            <MyHeader></MyHeader>
            <MyVideo></MyVideo>
        <View style={stylesElement.container}>
            <View style={stylesElement.header}>
                <Text style={stylesElement.titleText}>
                    Módulos
                </Text>
            </View>
            <ScrollView>
                {
                    listDataSource.map((item, key) => (
                        <ExpandableComponent
                        key={item.category_name}
                        item={item}
                        onClickFunction={() => {
                            updateLayout(key)
                        }}
                        />
                    ))
                }
            </ScrollView>
        </View>
        <View>
            <MySocial></MySocial>
        </View>
    </SafeAreaView>
  );
};

const stylesElement = StyleSheet.create({
    contrainer: {
        flex:1
    },
    header: {
        flexDirection: 'row',
        padding: 10
    },
    titleText: {
        flex:1,
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    heeaderButton: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18
    },
    item: {
        backgroundColor: '#f55d5d',
        padding: 20
    },
    itemText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10, 
        backgroundColor: "#FFF"
    },
    text: {
        fontSize: 16,
        padding: 10,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 16,
        padding: 10,
        textAlign: 'right'
    }
});

export default MyList;