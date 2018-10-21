import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, Linking, Platform } from 'react-native';
import { Container, Content, ListItem, Tab, Tabs, Button, Icon, StyleProvider } from 'native-base';
import HTML from 'react-native-render-html';

import getTheme from '../native-base-theme/components';
import scmobile from '../native-base-theme/variables/scmobile';
import style from './Styles';

export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'اتصل بِنَا',
  };

  render() {
    return (
      <StyleProvider style={getTheme(scmobile)}>
        <Container>
          <Content padder>
            <Text style={style.header}>اتصل بِنَا</Text>
            <Text style={style.paragraph}>{`السلام عليكم ورحمة الله وبركـــاته:
نرحب بكم في تطبيق الملحقية الثقافية بسفارة المملكة العربية السعودية في طوكيو على شبكة الإنترنت آملاً أن يسهم هذا التطبيق في تعزيز التواصل بينكم و بين الملحقية الثقافية التي ما وجدت إلا لتكون في خدمتكم وتقديم كل الدعم و العون لكم وأنتم في مهمتكم النبيلة بطلب العلم والمعرفة وتمثيل بلادكم و دينكم في بلاد الشمس المشرقة لتكونوا سفراء اليوم وبناة أمجاد الغد، ويسرها أن تطرح العديد من الوسائل للتواصل وترحب الملحقية بكافة أنواع التواصل الأخرى مثل البريد الإلكتروني والهاتف .

`}</Text>
            <Text style={style.header}> أهم وسائل الاتصال</Text>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-evenly' }}>
              <Button onPress={() => Linking.openURL('mailto:students@saudiculture.jp')}>
                <Icon name="mail" />
              </Button>
              <Button onPress={() => Linking.openURL('tel:+81-03-5348-3011')}>
                <Icon name="call" />
              </Button>
              <Button onPress={() => Linking.openURL('https://twitter.com/SaudiCultureJP')}>
                <Icon name="logo-twitter" />
              </Button>
              <Button onPress={() => Linking.openURL('https://www.facebook.com/pg/SaudiCultureJP')}>
                <Icon name="logo-facebook" />
              </Button>
            </View>
            <Text style={style.paragraph}>
              {
                'ترحب الملحقية بكافة الاتصالات الهاتفية من الطلاب المبتعثين. من الساعة 9:30 صباحا الي الساعة 4:30 مساء للوصول إلى الملحقية'
              }
            </Text>
            <Text style={style.header}>فريق التحرير</Text>
            <Text style={style.paragraph}>{`المشرف العام ورئيس التحرير:
أ. د. خالد بن عبدالرحمن الفرحان`}</Text>
            <Text style={style.paragraph}>{`مدير الجودة والتطوير:
أ. غالي المحمد`}</Text>
            <Text style={style.paragraph}>{`الدعم الفني:
أ.م. محي الشهري ، أ.م. مجاهد مهنا ، م. اوتا تايزن`}</Text>
            <Text style={style.paragraph}>{`التصميم: أ.م. مجاهد مهنا`}</Text>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
