import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, Linking, Platform, FlatList } from 'react-native';
import { Container, Content, Header, Item, Input, Body, Title, Button, Left, Right, Icon, ListItem } from 'native-base';
import TextStyle from '../Styles.js';

import db from '../Database';

const style = StyleSheet.create({
  list: {
    width: Dimensions.get('window').width - 36,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default class QamusScreen extends React.Component {
  static navigationOptions =
    Platform.OS === 'ios'
      ? { header: null }
      : {
          title: 'قواميس مشرق في البحث',
        };
  state = {
    keyword: '',
    data: [],
  };

  _search() {
    let kw = this.state.keyword.replace("'", "''");
    let sql = `SELECT * FROM qamus WHERE 
      japanese LIKE '%${kw}%' or furigana LIKE '%${kw}%' or 
      english LIKE '%${kw}%' or arabic LIKE '%${kw}%'
      LIMIT 100`;
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

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Button transparent>
            <Icon name="ios-arrow-back" onPress={() => this.props.navigation.goBack()} />
          </Button>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="الكلمة"
              onChangeText={keyword => this.setState({ keyword })}
              returnKeyType="search"
              value={this.state.keyword}
              onSubmitEditing={this._search.bind(this)}
              onFocus={() => this.setState({ keyword: '' })}
              clearButtonMode="while-editing"
            />
          </Item>
        </Header>
        <Content>
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item }) => (
              <ListItem>
                <Text style={{ flex: 1 }}>
                  {item.english} <Text style={style.bold}>{item.field}</Text>
                  {'\n'}
                  <Text style={TextStyle.japanese}>
                    {item.japanese}
                    {'\n'}
                  </Text>
                  <Text style={TextStyle.furigana}>
                    {item.furigana}
                    {'\n'}
                  </Text>
                  <Text style={TextStyle.arabic}>{item.arabic}</Text>
                </Text>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}
