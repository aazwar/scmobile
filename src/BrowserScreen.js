import React from 'react';
import { ScrollView, Dimensions, WebView } from 'react-native';
import { Container, Content, StyleProvider } from 'native-base';

import getTheme from '../native-base-theme/components';
import scmobile from '../native-base-theme/variables/scmobile';

import styles from './Styles';

export default class ViewFeed extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('url', ''),
    };
  };
  state = {
    url: '',
  };

  async componentDidMount() {
    let url = this.props.navigation.getParam('url', '');
    this.setState({ url });
  }

  render() {
    let url = this.state.url;
    return (
      <StyleProvider style={getTheme(scmobile)}>
        <Container>
          <WebView source={{ uri: url }} style={{ flex: 1 }} />
        </Container>
      </StyleProvider>
    );
  }
}
