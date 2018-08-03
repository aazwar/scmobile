import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, Linking, Platform, FlatList } from 'react-native';
import { Container, Content, Header, Item, Input, Body, Title, Button, Left, Right, Icon, ListItem } from 'native-base';
import style from '../Styles.js';

import db from '../Database';

export default class QamusScreen extends React.Component {
  static navigationOptions = {
    title: 'قواميس مشرق البحث',
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
        <ListItem icon>
          <Left>
            <Button transparent>
              <Icon name={Platform.OS == 'ios' ? 'ios-menu' : 'md-menu'} />
            </Button>
          </Left>
          <Body>
            <Input
              placeholder="الكلمة"
              onChangeText={keyword => this.setState({ keyword })}
              returnKeyType="search"
              value={this.state.keyword}
              onSubmitEditing={this._search.bind(this)}
              onFocus={() => this.setState({ keyword: '' })}
              clearButtonMode="while-editing"
            />
          </Body>
          <Right>
            <Button transparent onPress={this._search.bind(this)}>
              <Icon name={Platform.OS == 'ios' ? 'ios-search' : 'md-search'} />
            </Button>
          </Right>
        </ListItem>

        <Content>
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item }) => (
              <ListItem>
                <Text style={{ flex: 1 }}>
                  {item.english} <Text style={{ fontWeight: 'bold' }}>{item.field}</Text>
                  {'\n'}
                  <Text style={style.japanese}>
                    {item.japanese}
                    {'\n'}
                  </Text>
                  <Text style={style.furigana}>
                    {item.furigana}
                    {'\n'}
                  </Text>
                  <Text style={style.arabic}>{item.arabic}</Text>
                </Text>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}
