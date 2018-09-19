import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { human, material, notoCJKWeights } from 'react-native-typography';

let styles =
  Platform.OS === 'ios'
    ? {
        bodyText: { ...human.bodyObject },
        caption: { ...human.caption2Object, fontStyle: 'italic' },
        japanese: { ...human.bodyObject, fontFamily: 'Hiragino Kaku Gothic ProN' },
        furigana: { ...human.caption2Object, fontFamily: 'Hiragino Kaku Gothic ProN' },
        arabic: {
          fontFamily: 'Droid Arabic Kufi',
          textAlign: 'right',
        },
        arabicBold: {
          fontFamily: 'Droid Arabic Kufi',
          fontWeight: 'bold',
          textAlign: 'right',
        },
      }
    : {
        bodyText: { ...material.body1Object },
        caption: { ...material.captionObject, fontStyle: 'italic' },
        japanese: { ...material.body1Object, ...notoCJKWeights.regularObject },
        furigana: { ...material.captionObject, ...notoCJKWeights.regularObject, fontStyle: 'italic' },
        arabic: {
          fontFamily: 'DroidKufi-Regular',
          textAlign: 'right',
        },
        arabicBold: {
          fontFamily: 'DroidKufi-Bold',
          textAlign: 'right',
        },
      };

styles = {
  ...styles,
  buttonMenu: {
    margin: 5,
    padding: 5,
  },
  buttonMenuText: {
    ...styles.arabicBold,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    fontSize: 16,
  },
  buttonMenuContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...styles.arabicBold,
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
  },
  header: {
    ...styles.arabicBold,
    flex: 1,
    marginBottom: 10,
    fontSize: 18,
  },
  jheader: {
    ...styles.japanese,
    flex: 1,
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 18,
  },
  paragraph: {
    ...styles.arabic,
    flex: 1,
    fontSize: 16,
  },
  jparagraph: {
    ...styles.japanese,
    flex: 1,
    fontSize: 16,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
};

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

export default styles;
