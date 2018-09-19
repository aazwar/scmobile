import React from 'react';
import { ScrollView, Dimensions, WebView } from 'react-native';
import { Container, Content } from 'native-base';

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
      <Container>
        <WebView source={{ uri: url }} style={{ flex: 1 }} />
      </Container>
    );
  }
}
