import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, ImageBackground, Linking, Platform } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Left, Right, Icon } from 'native-base';

import style from '../Styles';

export default class BookScreen extends React.Component {
  static navigationOptions = {
    title: 'الطوارئ',
  };
  render() {
    let { width, height } = Dimensions.get('window');
    return (
      <ImageBackground source={require('../assets/em_bg.jpg')} style={{ width, height }} resizeMode="stretch">
        <Container style={{...style.buttonMenuContainer, backgroundColor: 'rgba(52, 52, 52, 0.5)'
}}>
          <Button block light style={style.buttonMenu} onPress={() => this.props.navigation.navigate('Profile')}>
            <Text style={style.buttonMenuText}>المعلومات الشخصية</Text>
          </Button>
          <Button block light style={style.buttonMenu} onPress={() => this.props.navigation.navigate('Jishin')}>
            <Text style={style.buttonMenuText}>الاحتياطات والإجراءات المتبعة وقت الزلازل</Text>
          </Button>
          <Button block light style={style.buttonMenu} onPress={() => this.props.navigation.navigate('Taifu')}>
            <Text style={style.buttonMenuText}>قواميس مشرق في البحث</Text>
          </Button>
        </Container>
      </ImageBackground>
    );
  }
}
