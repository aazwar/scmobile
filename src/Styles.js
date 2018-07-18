import { Platform, StyleSheet } from 'react-native';
import { human, material, notoCJKWeights } from 'react-native-typography';

let styles =
  Platform.OS === 'ios'
    ? StyleSheet.create({
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
      })
    : StyleSheet.create({
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
      });
export default styles;
