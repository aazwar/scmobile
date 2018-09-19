import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, Linking, Platform, ScrollView } from 'react-native';
import { Container, Content, ListItem, Tab, Tabs } from 'native-base';
import HTML from 'react-native-render-html';

import style from './Styles';

export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: '問い合わせ先',
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Text style={style.jheader}>問い合わせ先</Text>
          <Text style={style.jparagraph}>{`サウジアラビア大使館 文化部
〒164-0011 東京都中野区中央2-37-3 中野旭ビル
TEL: 03-5348-3011
FAX: 03-5348-3012
Email: info@saudiculture.jp
            `}</Text>
        </Content>
      </Container>
    );
  }
}
