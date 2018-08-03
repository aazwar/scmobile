import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Container, Content, ListItem } from 'native-base';
import { createStackNavigator } from 'react-navigation';

import style from '../Styles';

export default class JishinScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'الاحتياطات والإجراءات المتبعة وقت الزلازل'
  }
  render() {
    return (
      <Container>
        <Content padder>
          <Text style={{...style.arabicBold, textAlign: 'center', margin: 10, fontSize: 20 }}>{'الاحتياطات والإجراءات المتبعة وقت الزلازل'}</Text>
      <Text style={style.arabic}>{`تتعرض العديد من المناطق في اليابان إلى أمطار رعدية شديدة وأعاصير فمن باب حرص الملحقية الثقافية السعودية في اليابان على توعية الطلبة المبتعثين وإعدادهم لأية حالات طارئة قد تحدث لا قدر الله في بلد الابتعاث يطيب للملحقية أن تبعث إليكم بتقرير عن الاحتياطات والإجراءات الواجب اتخاذها تجاه الأعاصير والأمطار الشديد. فالملحقية إذ تتمنى لكم السلامة وتدعو الجميع لتوخي كل سبل الحيطة والحذر وتجنب الذهاب للأماكن الخطيرة التي من الممكن أن تهدد أمنكم وسلامتكم.`}
      </Text>
      <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
        
      </View>
        </Content>
      </Container>
    );
  }
}
