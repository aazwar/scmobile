import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, Linking, Platform, FlatList } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Left, Right, Icon, ListItem } from 'native-base';

import { fetchTaamim } from './fetcher.js';

class Tamim extends React.PureComponent {
  render() {
    let { url, title, navigation } = this.props;
    return (
      <ListItem onPress={() => navigation.navigate('ViewFeed', { url, title })}>
        <Text style={{ textAlign: 'right', flex: 1 }}>{title}</Text>
      </ListItem>
    );
  }
}

export default class TamimScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'التعاميم المهمة',
      headerRight: (
        <Button transparent onPress={navigation.getParam('refresh')}>
          <Icon name={Platform.OS == 'ios' ? 'ios-refresh' : 'md-refresh'} />
        </Button>
      ),
    };
  };

  state = {
    tamims: [],
  };

  async componentDidMount() {
    this.props.navigation.setParams({
      refresh: async () => {
        let tamims = await fetchTaamim(true);
        this.setState({ tamims });
      },
    });
    let tamims = await fetchTaamim();
    this.setState({ tamims });
  }

  render() {
    return (
      <Container>
        <FlatList
          data={this.state.tamims}
          keyExtractor={(e, i) => `${i}`}
          renderItem={({ item }) => <Tamim {...item} navigation={this.props.navigation} />}
        />
      </Container>
    );
  }
}
