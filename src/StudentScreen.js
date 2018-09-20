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
import { Container, Content, Header, Body, Title, Button, Left, Right, Icon, Footer, StyleProvider } from 'native-base';

import getTheme from '../native-base-theme/components';
import scmobile from '../native-base-theme/variables/scmobile';
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
    param: { url: 'https://saudiculture.jp/list/?lang=ar', lang: 'ar', title: 'قائمة الشرف' },
    color: 'primary',
    title: 'قائمة الشرف',
  },
  {
    path: 'Browser2',
    param: { url: 'https://saudiculture.jp/form/?lang=ar', lang: 'ar', title: 'قائمة النماذج' },
    color: 'success',
    title: 'قائمة النماذج',
  },
  {
    path: 'Ratification',
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
      <StyleProvider style={getTheme(scmobile)}>
        <Container style={style.buttonMenuContainer}>
          {menu.map((e, i) => <MenuButton key={`${i}`} {...e} navigation={this.props.navigation} />)}
        </Container>
      </StyleProvider>
    );
  }
}
