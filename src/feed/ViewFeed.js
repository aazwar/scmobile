import React from 'react';
import { ScrollView, Dimensions, Text } from 'react-native';

import { fetchContent } from './fetcher';
import styles from '../Styles';
import { SimpleHtml, AutoImage } from '../Components';

export default class ViewFeed extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', ''),
    };
  };
  state = {};

  async componentDidMount() {
    let url = this.props.navigation.getParam('url', '');
    let lang = this.props.navigation.getParam('lang', 'ar');
    let record = await fetchContent(url);
    console.log(record);
    this.setState({ ...record, lang });
  }

  render() {
    if (!this.state.date) return null;
    let { date, lang, elements } = this.state;
    return (
      <ScrollView style={{ flex: 1, margin: 10 }}>
        <Text style={lang == 'ar' ? styles.paragraph : styles.jparagraph}>{date}</Text>
        {elements.map((e, i) => {
          switch (e.type) {
            case 'h2':
              return (
                <Text key={`${i}`} style={lang == 'ar' ? styles.header : styles.jheader}>
                  {e.text}
                </Text>
              );
            case 'img':
              return <AutoImage key={`${i}`} source={{ uri: e.text }} />;
            case 'p':
              return (
                <SimpleHtml key={`${i}`} lang={lang}>
                  {e.text}
                </SimpleHtml>
              );
          }
        })}
      </ScrollView>
    );
  }
}
