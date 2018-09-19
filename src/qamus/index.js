import React from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Image, Platform, TouchableOpacity, FlatList, Modal } from 'react-native';
import { Container, Content, Header, Item, Input, Body, Title, Button, Left, Right, Icon, ListItem } from 'native-base';
import PopoverTooltip from 'react-native-popover-tooltip';

import style from '../Styles.js';
import db from '../Database';
import Settings from '../Settings';
import { HeaderBackButton } from 'react-navigation';

const fields = [
  { key: 'it', title: '[it] Information Technology / تكنولوجيا المعلومات' },
  { key: 'el', title: '[el] Electrical Engineering / الهندسة الكهربائية' },
  { key: 'ph', title: '[ph] Physics / علوم فيزيائية' },
  { key: 'ch', title: '[ch] Chemistry / كيمياء' },
  { key: 'mt', title: '[mt] Mathematics / الرياضيات' },
  { key: 'mc', title: '[mc] Mechanical / إلكترونيات' },
  { key: 'ec', title: '[ec] Economics / إلكترونيات' },
];

export default class QamusScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  settings = null;
  state = {
    keyword: '',
    data: [],
    showModal: false,
  };

  _fields() {
    let filter = [];
    let qamus = this.state.qamus;
    Object.keys(qamus).forEach((k, v) => qamus[k] && filter.push(k));
    if (fields.length == filter.length) return '';
    let str = filter.map(e => `field LIKE '%[${e}]%'`).join(' OR ');
    if (str) return `(${str}) AND `;
    return '';
  }

  _search() {
    let fieldFilter = this._fields();
    let kw = this.state.keyword.replace("'", "''");
    let sql = `SELECT * FROM qamus WHERE ${fieldFilter}
      (japanese LIKE '%${kw}%' or furigana LIKE '%${kw}%' or 
      english LIKE '%${kw}%' or arabic LIKE '%${kw}%')
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

  toggle(key) {
    let qamus = this.state.qamus;
    qamus[key] = !qamus[key];
    this.setState({ qamus });
  }

  async closeModal() {
    this.setState({ showModal: false });
    this.settings.qamus = this.state.qamus;
    await this.settings.store();
  }

  async componentDidMount() {
    let settings = new Settings();
    await settings.load();
    this.setState({ qamus: settings.qamus });
    this.settings = settings;
  }

  render() {
    return (
      <Container>
        <Modal visible={this.state.showModal} onRequestClose={() => this.setState({ showModal: false })}>
          {this.state.qamus && (
            <Container>
              <Content padder>
                <ListItem itemDevider>
                  <Text style={{ ...style.arabicBold, flex: 1 }}>مجال</Text>
                </ListItem>
                {fields.map((e, i) => {
                  return (
                    <ListItem key={`${i}`}>
                      <Body>
                        <Text style={style.arabic}>{e.title}</Text>
                      </Body>
                      <Right>
                        <TouchableOpacity onPress={() => this.toggle(e.key)}>
                          {Platform.OS === 'ios' ? (
                            <Icon name={this.state.qamus[e.key] ? 'ios-square' : 'ios-square-outline'} />
                          ) : (
                            <Icon name={this.state.qamus[e.key] ? 'md-square' : 'md-square-outline'} />
                          )}
                        </TouchableOpacity>
                      </Right>
                    </ListItem>
                  );
                })}
                <ListItem>
                  <Body>
                    <Button block info onPress={() => this.closeModal()}>
                      <Text style={style.arabic}>غلق</Text>
                    </Button>
                  </Body>
                </ListItem>
              </Content>
            </Container>
          )}
        </Modal>
        <Header searchBar rounded>
          {Platform.OS === 'ios' && <HeaderBackButton onPress={() => this.props.navigation.goBack()} />}
          <Item>
            <Icon name={Platform.OS == 'ios' ? 'ios-menu' : 'md-menu'} onPress={() => this.setState({ showModal: true })} />
            <Input
              placeholder="الكلمة"
              onChangeText={keyword => this.setState({ keyword })}
              returnKeyType="search"
              value={this.state.keyword}
              onSubmitEditing={this._search.bind(this)}
              onFocus={() => this.setState({ keyword: '' })}
              clearButtonMode="while-editing"
            />
            <Icon name={Platform.OS == 'ios' ? 'ios-search' : 'md-search'} onPress={this._search.bind(this)} />
          </Item>
        </Header>

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
