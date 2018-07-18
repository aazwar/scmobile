import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, Linking, Platform, FlatList, TouchableHighlight } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Left, Right, Icon, ListItem } from 'native-base';

import books from './books';

export default class BookScreen extends React.Component {
  static navigationOptions = {
    title: 'مطبوعات الملحقية',
  };
  render() {
    return (
      <Container>
        <Content>
          <FlatList
            data={books}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => (
              <ListItem style={{ flex: 1, flexDirection: 'column' }}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('BookDetail', { url: item.pdf })}>
                  <Image source={{ uri: item.cover }} style={{ ...item.size }} />
                </TouchableHighlight>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}
