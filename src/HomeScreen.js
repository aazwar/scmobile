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
  TouchableOpacity,
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

const imageButtons = {
  ar: {
    student: require('./assets/front/btn_student.png'),
    study_japan: require('./assets/front/btn_study_japan.png'),
    news: require('./assets/front/btn_news.png'),
    attache: require('./assets/front/btn_attache.png'),
    tamim: require('./assets/front/btn_tamim.png'),
    nihongo: require('./assets/front/btn_nihongo.png'),
    books: require('./assets/front/btn_books.png'),
    qamus: require('./assets/front/btn_qamus.png'),
  },
  jp: {
    bunkabu: require('./assets/front/btn_bunkabu.png'),
    news: require('./assets/front/btn_news_jp.png'),
    certification: require('./assets/front/btn_certification.png'),
    founder: require('./assets/front/btn_saudi.png'),
    salman: require('./assets/front/btn_salman.png'),
    books: require('./assets/front/btn_books_jp.png'),
    qamus: require('./assets/front/btn_qamus_jp.png'),
  },
  lang_ar: require('./assets/front/lang_ar.png'),
  lang_jp: require('./assets/front/lang_jp.png'),
  info: require('./assets/front/btn_info.png'),
};

const menu = {
  ar: [
    { path: 'Student', color: 'light', title: 'الشوؤن الطلابية', pos: { x: 30, y: 990 }, image: imageButtons.ar.student },
    {
      path: 'StudyJapan',
      color: 'warning',
      title: 'الدراسة في اليابان',
      pos: { x: 294, y: 990 },
      image: imageButtons.ar.study_japan,
    },
    { path: 'NewsAr', title: 'اخبار الملحقية', pos: { x: 558, y: 990 }, image: imageButtons.ar.news },
    { path: 'Attache', title: 'عن الملحقية', pos: { x: 822, y: 990 }, image: imageButtons.ar.attache },

    { path: 'Books', param: { title: 'مطبوعات الملحقية' }, pos: { x: 30, y: 1350 }, image: imageButtons.ar.books },
    { path: 'Tamim', title: 'التعاميم المهمة', pos: { x: 294, y: 1350 }, image: imageButtons.ar.tamim },
    { path: 'Nihongo', title: 'قاموس صوتي ميسر', pos: { x: 558, y: 1350 }, image: imageButtons.ar.nihongo },
    { path: 'Qamus', param: { title: 'قواميس مشرق للبحث', lang: 'ar' }, pos: { x: 822, y: 1350 }, image: imageButtons.ar.qamus },
  ],
  jp: [
    { path: 'Bunkabu', title: '文化部', pos: { x: 138, y: 990 }, image: imageButtons.jp.bunkabu },
    { path: 'NewsJp', title: 'ニュース', pos: { x: 414, y: 990 }, image: imageButtons.jp.news },
    { path: 'Certification', title: '認証取得', pos: { x: 690, y: 990 }, image: imageButtons.jp.certification },

    { path: 'Books', param: { title: '電子書籍' }, pos: { x: 30, y: 1350 }, image: imageButtons.jp.books },
    { path: 'Qamus', param: { title: '科学専門用語辞典', lang: 'jp' }, pos: { x: 294, y: 1350 }, image: imageButtons.jp.qamus },
    {
      path: 'Browser',
      param: { url: 'https://king-abdulaziz.saudiculture.jp/', title: 'サウディアラビア建国の祖' },
      pos: { x: 558, y: 1350 },
      image: imageButtons.jp.founder,
    },
    {
      path: 'Browser',
      param: { url: 'https://king-salman.saudiculture.jp/', title: '明哲なる王' },
      pos: { x: 822, y: 1350 },
      image: imageButtons.jp.salman,
    },
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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    //title: 'الملحقية الثقافية السعودية في اليابان',
    header: null,
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
    if (Platform.OS == 'android') height -= 25;
    let lang = this.state.lang || 'ar';
    let buttons = menu[lang] || menu.ar;
    console.log('screen', width, height);

    const sx = width / 1080;
    const sy = height / 1920;

    console.log(sx, sy, sx * 251, sy * 251);
    translate = function(point) {
      return {
        left: (point.x - 10) * sx,
        top: point.y * sy,
        width: 251 * sx,
        height: 251 * sy,
      };
    };

    return (
      <ImageBackground source={require('./assets/front/bg.jpg')} style={{ width, height }} resizeMode="stretch">
        {buttons.map((e, i) => {
          let rect = translate(e.pos);
          let style = { position: 'absolute', ...rect };
          return (
            <TouchableOpacity key={`${i}`} style={style} onPress={() => this.props.navigation.navigate(e.path, e.param)}>
              <Image source={e.image} style={{ width: rect.width, height: rect.height, resizeMode: 'stretch' }} />
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          style={{ position: 'absolute', width: 105 * sx, height: 105 * sx, left: ((1080 - 105) / 2) * sx, bottom: 25 * sx }}
          onPress={this._contact.bind(this)}>
          <Image source={imageButtons.info} style={{ width: 105 * sx, height: 105 * sx, resizeMode: 'stretch' }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ position: 'absolute', width: 362 * sx, height: 88 * sy, left: 50 * sx, bottom: 33 * sx }}
          onPress={() => this._setLang('ar')}>
          <Image source={imageButtons.lang_ar} style={{ width: 362 * sx, height: 88 * sy, resizeMode: 'stretch' }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ position: 'absolute', width: 362 * sx, height: 88 * sy, right: 50 * sx, bottom: 33 * sx }}
          onPress={() => this._setLang('jp')}>
          <Image source={imageButtons.lang_jp} style={{ width: 362 * sx, height: 88 * sy, resizeMode: 'stretch' }} />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
