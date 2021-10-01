import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

class MyVideo extends Component {
    render() {
        return <WebView 
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{uri: 'https://www.youtube.com/embed/ANdSdIlgsEw?rel=0&autoplay=0&showinfo=0&controls=0'}} />;
      }
  }

export default MyVideo;