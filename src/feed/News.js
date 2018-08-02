import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, Linking, Platform, FlatList } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Left, Right, Icon, ListItem } from 'native-base';

import { fetchNews } from './fetcher.js';

class News extends React.PureComponent {
  render() {
    let { url, title, navigation } = this.props;
    return (
      <ListItem onPress={() => navigation.navigate('ViewFeed', { url, title })}>
        <Text style={{ textAlign: 'right', flex: 1 }}>{title}</Text>
      </ListItem>
    );
  }
}

export default class NewsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'اخبار الملحقية',
      headerRight: (
        <Button transparent onPress={navigation.getParam('refresh')}>
          <Icon name={Platform.OS == 'ios' ? 'ios-refresh' : 'md-refresh'} />
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
        let news = await fetchNews(true);
        this.setState({ news });
      },
    });
    let news = await fetchNews();
    this.setState({ news });
  }

  render() {
    return (
      <Container>
        <FlatList
          data={this.state.news}
          keyExtractor={(e, i) => `${i}`}
          renderItem={({ item }) => <News {...item} navigation={this.props.navigation} />}
        />
      </Container>
    );
  }
}