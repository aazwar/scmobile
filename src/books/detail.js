import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, Linking, Platform, WebView, ActivityIndicator } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Left, Right, Icon, ListItem } from 'native-base';

import books from './books';

export default class BookDetail extends React.Component {
  static navigationOptions = {
    title: 'مطبوعات الملحقية',
    right: <ActivityIndicator size="small" />,
  };
  render() {
    let url = this.props.navigation.getParam('url');
    if (Platform.OS === 'android') url = 'http://docs.google.com/gview?embedded=true&url=' + encodeURIComponent(url);
    return <WebView style={{ flex: 1 }} source={{ uri: url }} />;
  }
}
