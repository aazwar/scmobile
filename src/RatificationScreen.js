import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, Linking, Platform, ScrollView } from 'react-native';
import { Container, Content, ListItem, Tab, Tabs, StyleProvider } from 'native-base';
import HTML from 'react-native-render-html';

import getTheme from '../native-base-theme/components';
import scmobile from '../native-base-theme/variables/scmobile';
import style from './Styles';
import { RightList } from './Components';

export default class RatificationScreen extends React.Component {
  static navigationOptions = {
    title: 'تصديق الشهادات',
  };

  render() {
    return (
      <StyleProvider style={getTheme(scmobile)}>
        <Container>
          <Content padder>
            <Text style={style.title}>آلية التصديق</Text>
            <Text style={style.header}>إجراءات التصديق على الشهادات الخاصة بالمواطنين السعوديين الدارسين في اليابان</Text>

            <RightList number="1">
              لا حاجة لإحضار أو ارسال شهاداتكم للمصادقة من الملحقية حسب ما كان معمول به سابقاً، حيث تم إيقاف العمل بالمصادقة
              اليدوية (الأختام) على الشهادات الاكاديمية ( دبلوم بعد الثانوية – بكالوريوس – دبلوم عالي – ماجستير – دكتوراه) بناً
              على تعميم وزارة التعليم ذي الرقم 109338 و تاريخ 1438/12/01هـ.
            </RightList>
            <RightList number="2">
              رفع طلب معادلة الشهادة عبر نظام معادلة الشهادات الجامعية{` ” https://eqs.moe.gov.sa/Account/Login?ReturnUrl=%2f سفير المعادلات.`}
            </RightList>
            <RightList number="3">تقوم الملحقية بالمصادقة الالكترونية بعد التأكد من:</RightList>
            <RightList>صحة صدور الشهادة من الجامعة (المؤسسة التعليمية).</RightList>
            <RightList>الجامعة موصى بها.</RightList>
            <RightList>إسلوب الدراسة (إنتظام كامل).</RightList>
            <RightList>طريقة الدراسة مباشرة وليست عن بعد.</RightList>
            <Text style={style.paragraph}>—————————————————————————</Text>
            <Text style={style.header}>إجراءات التصديق على الشهادات لغير السعوديين</Text>
            <Text style={style.paragraph}>
              حرصاً من الملحقية الثقافية على تقديم خدمة متميزة وسريعة تحوز على رضى الجميع، نأمل من الأخوة والأخوات من غير
              السعوديين الراغبين في توثيق أوراقهم للعمل أو الدراسة بالمملكة العربية السعودية مراعاة الآتي :
            </Text>
            <RightList>التواصل مع المؤسسات أدناه واتباع آلية التصديق الأكاديمي والتوثيق المنصوص عليها.</RightList>
            <Text style={style.header}>مكاتب لتسهيل إجراءات التصديق الأكاديمي والتوثيق</Text>
            <Text style={style.paragraph}>{'\n\n'}</Text>
            <Text style={style.jparagraph}>{`
Cut-bell International Legal Affairs Office
F-Bld. 5F, 1-10-8 Jinnan, 
Shibuya-ku,Tokyo,150-0041
03-6416-4990
info@cut-bell.com
www.cut-bell.com

International Hospitality Conference Service Association (IHCSA)
Toranomon NN Bldg., 1-21-17, 
Toranomon, Minato-ku
Tokyo, 150-0041
03-3580-1640
hiroyuki.sato@ihcsa.or.jp
www.ihcsa.or.jp/eng/
        
Hirashima International CAPS Office
1-39-15-805 Higashi Ikebukuro, Toshima-ku, Tokyo 170-0013
mail@hirashima-igs.com
03-6914-1395
www.hirashima-igs.com
`}</Text>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
