import React from 'react';
import { ScrollView, Dimensions, Text } from 'react-native';

import styles from './Styles';
import { TextMark } from './Components';

export default class TextView extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', ''),
    };
  };
  state = {};

  render() {
    let lang = this.props.navigation.getParam('lang', 'ar');
    let text = this.props.navigation.getParam('text', '');
    return <TextMark lang={lang}>{text}</TextMark>;
  }
}
