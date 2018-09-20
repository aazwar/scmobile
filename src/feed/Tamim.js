import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, Linking, Platform, FlatList } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Left, Right, Icon, ListItem, StyleProvider } from 'native-base';

import getTheme from '../../native-base-theme/components';
import scmobile from '../../native-base-theme/variables/scmobile';
import { fetchTaamim } from './fetcher.js';
import styles from '../Styles';

class Tamim extends React.PureComponent {
  render() {
    let { url, title, navigation } = this.props;
    return (
      <ListItem onPress={() => navigation.navigate('ViewFeed', { url, title })}>
        <Text style={{ ...styles.arabic, flex: 1 }}>{title}</Text>
      </ListItem>
    );
  }
}

export default class TamimScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: 'التعاميم المهمة',
      headerTitleStyle: navigationOptions.headerTitleStyle,
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
      <StyleProvider style={getTheme(scmobile)}>
        <Container>
          <FlatList
            data={this.state.tamims}
            keyExtractor={(e, i) => `${i}`}
            renderItem={({ item }) => <Tamim {...item} navigation={this.props.navigation} />}
          />
        </Container>
      </StyleProvider>
    );
  }
}
