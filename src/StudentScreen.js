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

const menu = [
  {
    path: 'Browser2',
    param: { url: 'https://saudiculture.jp/list/?lang=ar', lang: 'ar' },
    color: 'primary',
    title: 'قائمة الشرف',
  },
  {
    path: 'Browser2',
    param: { url: 'https://saudiculture.jp/form/?lang=ar', lang: 'ar' },
    color: 'success',
    title: 'قائمة النماذج',
  },
  {
    path: 'Browser2',
    param: {
      url:
        'https://saudiculture.jp/%d9%82%d8%b3%d9%85-%d8%aa%d8%b5%d8%af%d9%8a%d9%82-%d8%a7%d9%84%d8%b4%d9%87%d8%a7%d8%af%d8%a7%d8%aa/?lang=ar',
      lang: 'ar',
    },
    color: 'light',
    title: 'تصديق الشهادات',
  },
];

export default class StudentScreen extends React.Component {
  static navigationOptions = {
    title: 'الشوؤن الطلابية',
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
