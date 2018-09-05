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
    let { path, color, title, navigation } = this.props;
    let props = { [color]: true, style: style.buttonMenu };
    return (
      <Button block {...props} onPress={() => navigation.navigate(path)}>
        <Text style={style.buttonMenuText}>{title}</Text>
      </Button>
    );
  }
}

const menu = {
  ar: [
    { path: 'Tamim', color: 'info', title: 'التعاميم المهمة' },
    { path: 'NewsAr', color: 'primary', title: 'اخبار الملحقية' },
    { path: 'Qamus', color: 'success', title: 'قواميس مشرق البحث' },
    { path: 'Nihongo', color: 'success', title: 'القاموس الصوطي الميسر' },
    { path: 'Books', color: 'warning', title: 'مطبوعات الملحقية' },
    { path: 'Attache', color: 'light', title: 'عن الملحقية' },
  ],
  en: [
    { path: 'NewsEn', color: 'primary', title: 'Saudi Culture News' },
    { path: 'Qamus', color: 'success', title: 'Dictionary' },
    { path: 'Contact', color: 'light', title: 'Contact' },
  ],
  jp: [
    { path: 'NewsJp', color: 'primary', title: 'ニュース' },
    { path: 'Qamus', color: 'success', title: '科学専門用語辞典' },
    { path: 'Certification', color: 'light', title: '認証取得' },
    { path: 'Contact', color: 'light', title: '問い合わせ' },
  ],
};

export default class BookScreen extends React.Component {
  static navigationOptions = {
    //title: 'الملحقية الثقافية السعودية في اليابان',
    header: (
      <Image
        source={require('./assets/header.jpg')}
        style={{ resizeMode: 'stretch', height: Platform.OS === 'ios' ? 64 : 56, width: Dimensions.get('window').width }}
      />
    ),
  };

  state = {
    lang: 'ar',
  };

  async componentDidMount() {
    let lang = AsyncStorage.getItem('lang') || 'ar';
    this.setState({ lang });
  }

  _setLang(lang) {
    this.setState({ lang });
    AsyncStorage.setItem('lang', lang);
  }

  render() {
    let { width, height } = Dimensions.get('window');
    let lang = this.state.lang || 'ar';
    let buttons = menu[lang] || menu.ar;
    return (
      <Container style={style.buttonMenuContainer}>
        {buttons.map((e, i) => <MenuButton key={`${i}`} {...e} navigation={this.props.navigation} />)}
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0 }}>
          <Button transparent dark style={{ margin: 10 }} onPress={() => this._setLang('ar')}>
            <Text>🇸🇦 العربية</Text>
          </Button>
          <Button transparent dark style={{ margin: 10 }} onPress={() => this._setLang('jp')}>
            <Text>🇯🇵 日本語</Text>
          </Button>
        </View>
        <Button transparent dark style={{ position: 'absolute', right: 5, bottom: 5 }} onPress={() => this.props.navigation.navigate('Contact')}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>ⓘ</Text>
        </Button>
      </Container>
    );
  }
}
