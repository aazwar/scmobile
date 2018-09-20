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
import _ from 'lodash';

import style from './Styles';

class MenuButton extends React.Component {
  render() {
    let { path, color, title, navigation, param } = this.props;
    let props = { [color]: true, style: style.buttonMenu };
    return (
      <Button {...props} onPress={() => navigation.navigate(path, param)}>
        <Text style={style.buttonMenuText}>{title}</Text>
      </Button>
    );
  }
}

const menu = {
  ar: [
    { path: 'NewsAr', color: 'primary', title: 'اخبار الملحقية' },
    { path: 'Attache', color: 'light', title: 'عن الملحقية' },

    { path: 'Student', color: 'light', title: 'الشوؤن الطلابية' },
    { path: 'StudyJapan', color: 'warning', title: 'الدراسة في اليابان' },

    { path: 'Books', color: 'warning', title: 'مطبوعات الملحقية' },
    { path: 'Tamim', color: 'info', title: 'التعاميم المهمة' },

    { path: 'Nihongo', color: 'success', title: 'قاموس صوتي ميسر' },
    { path: 'Qamus', color: 'success', title: 'قواميس مشرق للبحث' },
  ],
  jp: [
    { path: 'Bunkabu', color: 'light', title: '文化部' },
    { path: 'NewsJp', color: 'primary', title: 'ニュース' },
    { path: 'Certification', color: 'light', title: '認証取得' },
    { path: 'Books', color: 'warning', title: '電子書籍' },
    { path: 'Qamus', color: 'success', title: '科学専門用語辞典' },
    /*{
      path: 'Browser',
      param: { url: 'http://king-abdulaziz.saudiculture.jp/' },
      color: 'primary',
      title: 'サウディアラビア建国の祖',
    },
    {
      path: 'Browser',
      param: { url: 'https://king-salman.saudiculture.jp/' },
      color: 'success',
      title: '明哲なる王',
    },*/
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

  _contact() {
    this.props.navigation.navigate(this.state.lang == 'jp' ? 'Toiawase' : 'Contact');
  }

  render() {
    let { width, height } = Dimensions.get('window');
    let lang = this.state.lang || 'ar';
    let buttons = menu[lang] || menu.ar;
    return (
      <Container style={style.buttonMenuContainer}>
        {_.chunk(buttons, 2).map((e, i) => (
          <View key={`${i}`} style={{ flex: 1, flexDirection: 'row' }}>
            <MenuButton {...e[0]} navigation={this.props.navigation} />
            {e[1] && <MenuButton {...e[1]} navigation={this.props.navigation} />}
          </View>
        ))}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            position: 'absolute',
            bottom: 0,
          }}>
          <Button transparent dark style={{ margin: 10 }} onPress={() => this._setLang('ar')}>
            <Text>🇸🇦 العربية</Text>
          </Button>
          <Button transparent dark style={{ margin: 10 }} onPress={() => this._setLang('jp')}>
            <Text>🇯🇵 日本語</Text>
          </Button>
        </View>
        <Button transparent dark style={{ position: 'absolute', right: 5, bottom: 5 }} onPress={this._contact.bind(this)}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>ⓘ</Text>
        </Button>
      </Container>
    );
  }
}
