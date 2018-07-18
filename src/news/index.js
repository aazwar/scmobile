import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, Linking, Platform } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Left, Right, Icon } from 'native-base';

export default class NewsScreen extends React.Component {
  render() {
    return (
      <Container>
        <Button block>
          <Text>Contact</Text>
        </Button>
      </Container>
    );
  }
}
