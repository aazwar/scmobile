import React from 'react';
import { ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

import { fetchSCSite } from './feed/fetcher';
import styles from './Styles';

export default class ViewFeed extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('url', ''),
    };
  };

  state = {
    html: '<html><body></body></html>',
  };

  async componentDidMount() {
    let url = this.props.navigation.getParam('url', '');
    let content = await fetchSCSite(url);
    let html = `<html>
  <body>
    ${content}
  </body>
</html>`;
    this.setState({ html });
    console.log(content);
  }

  render() {
    let { lang } = this.props;
    return (
      <ScrollView style={{ flex: 1, margin: 10 }}>
        <HTML
          html={this.state.html}
          imagesMaxWidth={Dimensions.get('window').width}
          baseFontStyle={lang === 'ar' ? styles.arabic : styles.japanese}
          tagsStyles={
            lang === 'ar'
              ? {
                  h2: { textAlign: 'right' },
                  p: { marginTop: 14, marginBottom: 14 },
                }
              : {
                  h2: { textAlign: 'left' },
                  p: { marginTop: 14, marginBottom: 14 },
                }
          }
          onLinkPress={(evt, href) => { this.props.navigation.push('Browser2', {url: href}); }}
        />
      </ScrollView>
    );
  }
}
