import React from 'react';
import { ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

import { fetchContent } from './fetcher';
import styles from '../Styles';

export default class ViewFeed extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', ''),
    };
  };

  state = {
    html: '<html><body></body></html>',
  };

  async componentDidMount() {
    let url = this.props.navigation.getParam('url', '');
    let record = await fetchContent(url);
    let html = `<html>
  <body><p>${record.date}<br></p>${record.content}
  </body>
</html>`;
    console.log(html);
    this.setState({ html });
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, margin: 10 }}>
        <HTML
          html={this.state.html}
          imagesMaxWidth={Dimensions.get('window').width}
          baseFontStyle={styles.arabic}
          tagsStyles={{
            h2: { textAlign: 'right' },
            p: { textAlign: 'right', marginTop: 14, marginBottom: 14 },
          }}
        />
      </ScrollView>
    );
  }
}
