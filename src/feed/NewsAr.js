import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, Linking, Platform, FlatList } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Left, Right, Icon, ListItem, StyleProvider } from 'native-base';

import getTheme from '../../native-base-theme/components';
import scmobile from '../../native-base-theme/variables/scmobile';
import { fetchNews } from './fetcher.js';
import styles from '../Styles';

class News extends React.PureComponent {
  render() {
    let { url, title, navigation } = this.props;
    return (
      <ListItem onPress={() => navigation.navigate('ViewFeed', { url, title, lang: 'ar' })}>
        <Text style={{ ...styles.arabic, flex: 1 }}>{title}</Text>
      </ListItem>
    );
  }
}

export default class NewsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: 'اخبار الملحقية',
      headerTitleStyle: navigationOptions.headerTitleStyle,
      headerRight: (
        <Button transparent onPress={navigation.getParam('refresh')}>
          <Icon size={25} color="green" name={Platform.OS == 'ios' ? 'ios-refresh' : 'md-refresh'} />
        </Button>
      ),
    };
  };

  state = {
    news: [],
  };

  async componentDidMount() {
    this.props.navigation.setParams({
      refresh: async () => {
        let news = await fetchNews('ar', true);
        this.setState({ news });
      },
    });
    let news = await fetchNews('ar');
    this.setState({ news });
  }

  render() {
    return (
      <StyleProvider style={getTheme(scmobile)}>
        <Container>
          <FlatList
            data={this.state.news}
            keyExtractor={(e, i) => `${i}`}
            renderItem={({ item }) => <News {...item} navigation={this.props.navigation} />}
          />
        </Container>
      </StyleProvider>
    );
  }
}
