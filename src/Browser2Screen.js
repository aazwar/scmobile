import React from 'react';
import { ScrollView, Dimensions, View, Text } from 'react-native';
import HTML from 'react-native-render-html';

import { fetchSCSite } from './feed/fetcher';
import styles from './Styles';

export default class ViewFeed extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', ''),
    };
  };

  state = {
    html: '<html><body></body></html>',
    error: false,
  };

  async componentDidMount() {
    let url = this.props.navigation.getParam('url', '');
    let lang = this.props.navigation.getParam('lang', 'ar');
    let { content, title } = (await fetchSCSite(url)) || {};
    console.log('Browser2', content, title);
    if (content) {
      let width = Dimensions.get('window').width - 20;
      // set form width
      content = content.replace(/width="5.0"/, `width="${width}"`);
      content = content.replace(/height="\d000"/, 'height="4500"');
      this.props.navigation.setParams({ title });
      let html = `<html>
    <body>
      ${content}
    </body>
  </html>`;
      this.setState({ html, lang });
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    let lang = this.state.lang;
    return this.state.error ? (
      <View style={{ flex: 1 }}>
        <Text>Network Error</Text>
      </View>
    ) : (
      <ScrollView style={{ flex: 1, margin: 10 }}>
        <HTML
          html={this.state.html}
          rtl={this.state.lang == 'ar'}
          imagesMaxWidth={Dimensions.get('window').width - 20}
          baseFontStyle={lang === 'ar' ? styles.arabic : styles.japanese}
          tagsStyles={
            lang === 'ar'
              ? {
                  h2: { textAlign: 'right' },
                  p: { marginTop: 14, marginBottom: 14 },
                  form: { widht: Dimensions.get('window').width - 20 },
                }
              : {
                  h2: { textAlign: 'left' },
                  p: { marginTop: 14, marginBottom: 14 },
                }
          }
          onLinkPress={(evt, href) => {
            this.props.navigation.push('Browser2', { url: href, lang });
          }}
        />
      </ScrollView>
    );
  }
}
