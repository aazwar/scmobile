import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, Linking, Platform, FlatList, Alert } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Left, Right, Icon, ListItem } from 'native-base';
import _ from 'lodash';
import Sound from 'react-native-sound';

import TextStyle from '../Styles.js';
import db from '../Database';

export default class NihongoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'قاموس الصوطي ميسر'),
    };
  };

  state = {
    data: [],
  };

  componentDidMount() {
    Sound.setCategory('Playback', true);
    let catid = this.props.navigation.getParam('catid', 0);

    let sql = catid ? `SELECT * FROM content WHERE catid = ${catid}` : 'SELECT * FROM category';
    this.setState({ data: [] });
    db.transaction(tx => {
      tx.executeSql(sql, [], (tx, results) => {
        var len = results.rows.length;
        let data = [];
        for (let i = 0; i < len; i++) {
          let row = results.rows.item(i);
          data.push(row);
        }
        this.setState({ data });
      });
    });
  }

  _play(url) {
    const callback = (error, sound) => {
      if (error) {
        Alert.alert('error', `${error.message}\n${url}`);
        return;
      }
      sound.play(() => {
        sound.release();
      });
    };

    const sound = new Sound(url, undefined, error => callback(error, sound));
  }

  render() {
    const server = 'https://saudiculture.jp/nihongo-audio';
    let catid = this.props.navigation.getParam('catid', 0);
    return (
      <Container>
        <Content>
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({ item }) => (
              <ListItem
                style={{ flex: 1 }}
                onPress={() =>
                  catid
                    ? this._play(`${server}/${item.audio_file}`)
                    : this.props.navigation.push('Nihongo', { catid: item.id, title: item.arabic })
                }>
                <Text style={{ flex: 1 }}>
                  <Text style={[TextStyle.bodyText, { padding: 5 }]}>{item.name}</Text>
                  <Text style={TextStyle.caption}>{`\n${item.reading}`}</Text>
                </Text>
                <Text style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                  <Text style={[TextStyle.arabic, { padding: 5 }]}>{`${item.arabic}`}</Text>
                </Text>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}
