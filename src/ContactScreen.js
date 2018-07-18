import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, Linking, Platform } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Left, Right, Icon, ListItem } from 'native-base';

import Styles from './Styles';

export default class ContactScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <ListItem itemHeader>
            <Text style={[Styles.arabicBold,{flex: 1}]}>التصل بنا</Text>
          </ListItem>
          <ListItem>
            <Text style={Styles.arabic}>{`إخوتي وأخواتي المبتعثين و المبتعثات
السلام عليكم ورحمة الله وبركـــاته:
نرحب بكم في تطبيق اصدارات الملحقية الثقافية بسفارة المملكة العربية السعودية في طوكيو على شبكة الإنترنت آملاً أن يسهم هذا التطبيق في تعزيز التواصل بينكم و بين الملحقية الثقافية التي ما وجدت إلا لتكون في خدمتكم وتقديم كل الدعم و العون لكم وأنتم في مهمتكم النبيلة بطلب العلم والمعرفة وتمثيل بلادكم و دينكم في بلاد الشمس المشرقة لتكونوا سفراء اليوم وبناة أمجاد الغد، ويسرها أن تطرح العديد من الوسائل للتواصل 

`}</Text>
          </ListItem>
          <ListItem itemHeader>
            <Text style={[Styles.arabicBold,{flex: 1}]}> فريق التحرير</Text>
          </ListItem>
          <ListItem>
            <Text style={Styles.arabic}>
              {`المشرف العام ورئيس التحرير :  أ. د. خالد بن عبدالرحمن الفرحان
الدعم الفني : أ.م. محي الشهري ، أ.م. مجاهد مهنا ، م. اوتا تايزن
`}
            </Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
