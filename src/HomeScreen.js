import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, ImageBackground, Linking, Platform } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Left, Right, Icon } from 'native-base';

import TextStyle from './Styles';

let style = StyleSheet.create({
  button: {
    margin: 10,
  },
  buttonText: {
    ...StyleSheet.flatten(TextStyle.arabicBold),
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    fontSize: 16,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
      <Container style={style.container}>
        <Button block info style={style.button}>
          <Text style={style.buttonText}>التعاميم المهمة</Text>
        </Button>
        <Button block primary style={style.button}>
          <Text style={style.buttonText}>اخبار الملحقية</Text>
        </Button>
        <Button block success style={style.button} onPress={() => this.props.navigation.navigate('Qamus')}>
          <Text style={style.buttonText}>قواميس مشرق في البحث</Text>
        </Button>
        <Button block success style={style.button} onPress={() => this.props.navigation.navigate('Nihongo')}>
          <Text style={style.buttonText}>قاموس الصوطي ميسر</Text>
        </Button>
        <Button block warning style={style.button} onPress={() => this.props.navigation.navigate('Books')}>
          <Text style={style.buttonText}>مطبوعات الملحقية</Text>
        </Button>
        <Button block light style={style.button}>
          <Text style={style.buttonText}>التصل بنا</Text>
        </Button>
      </Container>
    );
  }
}
