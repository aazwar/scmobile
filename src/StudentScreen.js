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
import text from './StudentText';

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
  list: require('./assets/student/btn_honorable_list.png'),
  form: require('./assets/student/btn_form.png'),
  cert: require('./assets/student/btn_certification.png'),
  route: require('./assets/student/btn_flight.png'),
  patent: require('./assets/student/btn_patent.png'),
  financial: require('./assets/student/btn_financial.png'),
  school: require('./assets/student/btn_school.png'),
  portal: require('./assets/student/btn_portal.png'),
};

const menu = [
  {
    path: 'Browser2',
    param: {
      url: 'https://saudiculture.jp/list/?lang=ar',
      lang: 'ar',
      title: 'قائمة الشرف',
    },
    image: imageButtons.list,
  },
  {
    path: 'Browser2',
    param: {
      url: 'https://saudiculture.jp/form/?lang=ar',
      lang: 'ar',
      title: 'قائمة النماذج',
    },
    image: imageButtons.form,
  },
  {
    path: 'Browser2',
    param: {
      url:
        'https://saudiculture.jp/%d9%82%d8%b3%d9%85-%d8%aa%d8%b5%d8%af%d9%8a%d9%82-%d8%a7%d9%84%d8%b4%d9%87%d8%a7%d8%af%d8%a7%d8%aa/?lang=ar',
      lang: 'ar',
      title: 'تصديق الشهادات',
    },
    image: imageButtons.cert,
  },
  {
    path: 'Browser2',
    param: {
      url:
        'https://saudiculture.jp/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D9%85%D9%84%D8%A7%D8%AD%D8%B8%D8%A7%D8%AA-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%AD%D8%AC%D8%B2-%D9%88%D8%AE%D8%B7-%D8%A7%D9%84%D8%B3%D9%8A%D8%B1/?lang=ar',
      lang: 'ar',
      title: 'ملاحظات على الحجز وخط السير',
    },
    image: imageButtons.route,
  },
  {
    path: 'Browser',
    param: {
      url: 'https://departments.moe.gov.sa/Scholarship/Pages/epalent.aspx',
      lang: 'ar',
      title: 'تسجيل براءات الإختراع',
    },
    image: imageButtons.patent,
  },
  {
    path: 'Browser2',
    param: {
      url: 'https://saudiculture.jp/%D8%A7%D9%84%D8%B4%D8%A4%D9%88%D9%86-%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9/?lang=ar',
      lang: 'ar',
      title: 'الشؤون المالية',
    },
    image: imageButtons.financial,
  },
  {
    path: 'Browser2',
    param: {
      url:
        'https://saudiculture.jp/%D8%A7%D9%84%D8%B4%D8%A4%D9%88%D9%86-%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%D8%A9/?lang=ar',
      lang: 'ar',
      title: 'الشؤون الدراسية',
    },
    image: imageButtons.school,
  },
  {
    path: 'Browser',
    param: {
      url: 'https://safeer.moe.gov.sa/Sites/Student/Pages/default.aspx',
      title: 'بوابة الطلبة',
      lang: 'ar',
    },
    image: imageButtons.portal,
  },
];

export default class BookScreen extends React.Component {
  static navigationOptions = {
    title: 'الشوؤن الطلابية',
  };

  render() {
    let { width, height } = Dimensions.get('window');
    if (Platform.OS == 'android') height -= 25;
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
      <ImageBackground source={require('./assets/student/bg2.png')} style={{ width, height }} resizeMode="stretch">
        <View style={{ flex: 1, selfAlign: 'center', justifyContent: 'center' }}>
          {_.chunk(menu, 3).map((e, i) => {
            return (
              <View key={`${i}`} style={{ flexDirection: 'row', justifyContent: 'center', height: 275 * sx }}>
                {e.map((f, j) => {
                  return (
                    <TouchableOpacity
                      key={`${j}`}
                      style={{ width: 251 * sx, height: 251 * sx, margin: 12 * sy }}
                      onPress={() => this.props.navigation.navigate(f.path, f.param)}>
                      <Image source={f.image} style={{ width: 251 * sx, height: 251 * sx, resizeMode: 'stretch' }} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          })}
        </View>
      </ImageBackground>
    );
  }
}
