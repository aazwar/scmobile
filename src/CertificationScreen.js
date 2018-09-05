import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, Linking, Platform, ScrollView } from 'react-native';
import { Container, Content, ListItem, Tab, Tabs } from 'native-base';
import HTML from 'react-native-render-html';

import style from './Styles';

export default class CertificationScreen extends React.Component {
  static navigationOptions = {
    title: '認証取得に関して',
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Text style={style.jheader}>認証取得に関して</Text>
          <Text
            style={
              style.jparagraph
            }>{`サウジアラビア王国大使館 文化部では、日本の教育機関から発行された卒業証明書及び成績証明書等文書に対してのみ認証を行っております。文化部からの認証取得をご希望の方は、下記指定代理店の何れかにご連絡の上、手続きを進めて下さい。
`}</Text>
          <Text style={style.jheader}>【文化部認証代行指定代理店】</Text>
          <Text style={style.jparagraph}>
            {`①  特定行政書士カットベル国際法務事務所
〒150-0041 東京都渋谷区神南1-10-8　エフビル５階
Ｅメール: info@cut-bell.com
電話：03-6416-4990
ウェブサイト：http://www.cut-bell.com/
`}
          </Text>
          <Text style={style.jparagraph}>
            {`②  一般社団法人　国際交流サービス協会
〒105-0001 東京都港区虎ノ門1-21-17 虎ノ門NNビル3F
Ｅメール：saudininsho@ihcsa.or.jp
電話：03-3580-1640
ウェブサイト：http://www.ihcsa.or.jp/
`}
          </Text>
          <Text style={style.jparagraph}>
            {`③  平島国際行政書士事務所
〒170-0013 東京都豊島区東池袋 1-39-15-805
Ｅメール：mail@hirashima-igs.com
電話：03-6914-1395
ウェブサイト：http://www.hirashima-igs.com/index.html
`}
          </Text>
        </Content>
      </Container>
    );
  }
}
