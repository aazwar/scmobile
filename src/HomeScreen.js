import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, ImageBackground, Linking, Platform } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Left, Right, Icon } from 'native-base';

import style from './Styles';

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
  render() {
    let { width, height } = Dimensions.get('window');
    return (
      <Container style={style.buttonMenuContainer}>
        <Button block info style={style.buttonMenu} onPress={() => this.props.navigation.navigate('Tamim')}>
          <Text style={style.buttonMenuText}>التعاميم المهمة</Text>
        </Button>
        <Button block primary style={style.buttonMenu} onPress={() => this.props.navigation.navigate('News')}>
          <Text style={style.buttonMenuText}>اخبار الملحقية</Text>
        </Button>
        <Button block success style={style.buttonMenu} onPress={() => this.props.navigation.navigate('Qamus')}>
          <Text style={style.buttonMenuText}>قواميس مشرق البحث</Text>
        </Button>
        <Button block success style={style.buttonMenu} onPress={() => this.props.navigation.navigate('Nihongo')}>
          <Text style={style.buttonMenuText}>القاموس الصوطي الميسر</Text>
        </Button>
        <Button block warning style={style.buttonMenu} onPress={() => this.props.navigation.navigate('Books')}>
          <Text style={style.buttonMenuText}>مطبوعات الملحقية</Text>
        </Button>
        <Button block light style={style.buttonMenu} onPress={() => this.props.navigation.navigate('Contact')}>
          <Text style={style.buttonMenuText}>التصل بنا</Text>
        </Button>
      </Container>
    );
  }
}
