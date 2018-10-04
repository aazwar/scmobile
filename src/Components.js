import React from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, Image, ScrollView } from 'react-native';

import styles from './Styles';

export class RightList extends React.PureComponent {
  render() {
    let bullet = this.props.number ? `(.${this.props.number}` : '•';
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={[styles.paragraph, this.props.style]}>{this.props.children}</Text>
        <Text style={{ marginLeft: 5, marginTop: 7, fontSize: 14 }}>{bullet}</Text>
      </View>
    );
  }
}

export class LeftList extends React.PureComponent {
  render() {
    let bullet = this.props.number ? `(.${this.props.number}` : '•';
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ marginRight: 5, marginTop: 7, fontSize: 14 }}>{bullet}</Text>
        <Text style={[styles.jparagraph, this.props.style]}>{this.props.children}</Text>
      </View>
    );
  }
}

export class UrlLink extends React.PureComponent {
  render() {
    let { url, navigation } = this.props;
    return (
      <Text style={styles.link} onPress={() => navigation.navigate('Browser', { url })}>
        {this.props.children}
      </Text>
    );
  }
}

export class SimpleHtml extends React.PureComponent {
  render() {
    let { navigation, lang } = this.props;
    let fragments = [];
    let regex = /<b>([^<]*)<\/b>|<strong>([^<]*)<\/strong>|<[^>]*>([^<]*)<\/[^>]*>|([^]+)/gm;
    let text = this.props.children.replace(/<br ?\/?>/, '\n');
    text = text.replace(/<[^>]*\/>/, '');
    while ((match = regex.exec(text)) != null) {
      fragments.push(match.filter(e => e));
    }
    let rstyle = { ...(lang == 'ar' ? styles.arabic : styles.japanese), paddingBottom: 10 };
    let bstyle = { ...(lang == 'ar' ? styles.arabicBold : styles.japanese), paddingBottom: 10 };
    return (
      <Text {...this.props}>
        {fragments.map((t, i) => {
          switch (t[0]) {
            case t[0].match(/^<b|^<st/): // italic
              return (
                <Text key={`${i}`} style={bstyle}>
                  {t[1]}
                </Text>
              );
              break;
            default:
              return (
                <Text key={i} style={rstyle}>
                  {t[1]}
                </Text>
              );
          }
        })}
      </Text>
    );
  }
}

export class TextMark extends React.PureComponent {
  render() {
    let { navigation, lang } = this.props;
    let fragments = [];
    let regex = /^(?:([=^-]) )?(.+)$/gm;
    while ((match = regex.exec(this.props.children)) != null) {
      fragments.push(match);
    }
    let rstyle = { ...(lang == 'ar' ? styles.paragraph : styles.jparagraph), paddingBottom: 10 };
    let hstyle = { ...(lang == 'ar' ? styles.header : styles.jheader), paddingBottom: 10 };
    let jstyle = { ...(lang == 'ar' ? styles.title : styles.jtitle), paddingBottom: 10 };
    console.log(fragments);
    return (
      <ScrollView style={{ flex: 1, margin: 10 }} {...this.props}>
        {fragments.map((t, i) => {
          switch (t[1]) {
            case '^':
              return (
                <Text key={`${i}`} style={jstyle}>
                  {t[2]}
                </Text>
              );
            case '=':
              return (
                <Text key={`${i}`} style={hstyle}>
                  {t[2]}
                </Text>
              );
            case '-':
              return lang == 'ar' ? <RightList key={`${i}`}>{t[2]}</RightList> : <LeftList key={`${i}`}>{t[2]}</LeftList>;
            default:
              return (
                <Text key={`${i}`} style={rstyle}>
                  {t[2] || '\n'}
                </Text>
              );
          }
        })}
      </ScrollView>
    );
  }
}

export class AutoImage extends React.PureComponent {
  state = {
    width: 0,
    height: 0,
  };
  componentDidMount() {
    Image.getSize(this.props.source.uri, (width, height) => {
      let sWidth = Dimensions.get('window').width - 20;
      this.setState({ width: sWidth, height: (height * sWidth) / width });
    });
  }

  render() {
    let { width, height } = this.state;
    return <Image style={{ width, height, margin: 5 }} source={this.props.source} />;
  }
}
