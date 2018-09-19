import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  Platform,
  AsyncStorage,
} from 'react-native';
import { Container, Content, Header, Body, Title, Button, Left, Right, Icon, Footer } from 'native-base';

import style from './Styles';

class MenuButton extends React.Component {
  render() {
    let { path, color, title, param, navigation } = this.props;
    let props = { [color]: true, style: style.buttonMenu };
    return (
      <Button block {...props} onPress={() => navigation.navigate(path, param)}>
        <Text style={style.buttonMenuText}>{title}</Text>
      </Button>
    );
  }
}

const menu = [];

export default class BookScreen extends React.Component {
  static navigationOptions = {
    title: 'サウディアラビア建国',
  };

  render() {
    let { width, height } = Dimensions.get('window');
    return (
      <Container style={style.buttonMenuContainer}>
        {menu.map((e, i) => <MenuButton key={`${i}`} {...e} navigation={this.props.navigation} />)}
      </Container>
    );
  }
}
