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
    margin: 10,
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
};

export default styles;
