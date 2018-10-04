import React from 'react';
import { Platform, StyleSheet } from 'react-native';
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
          flex: 1,
        },
        arabicBold: {
          fontFamily: 'Droid Arabic Kufi',
          fontWeight: 'bold',
          textAlign: 'right',
          flex: 1,
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
          flex: 1,
        },
        arabicBold: {
          fontFamily: 'DroidKufi-Bold',
          textAlign: 'right',
          flex: 1,
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
  jtitle: {
    ...styles.japanese,
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
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
    fontSize: 16,
  },
  paragraph: {
    ...styles.arabic,
    flex: 1,
    fontSize: 16,
  },
  jparagraph: {
    ...styles.japanese,
    flex: 1,
    fontSize: 14,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
};

export default styles;
