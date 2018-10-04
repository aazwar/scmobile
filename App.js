/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Root } from 'native-base';
import { createStackNavigator } from 'react-navigation';

import Styles from './src/Styles';
import Home from './src/HomeScreen';
import Contact from './src/ContactScreen';
import Books from './src/books';
import BookDetail from './src/books/detail';
import Nihongo from './src/NihongoScreen';
import Qamus from './src/QamusScreen';
import Tamim from './src/feed/Tamim';
import NewsAr from './src/feed/NewsAr';
import NewsJp from './src/feed/NewsJp';
import Certification from './src/CertificationScreen';
import Attache from './src/AttacheScreen';
import ViewFeed from './src/feed/ViewFeed';
import Toiawase from './src/ToiawaseScreen';
import Student from './src/StudentScreen';
import StudyJapan from './src/StudyJapanScreen';
import Bunkabu from './src/BunkabuScreen';
import Browser from './src/BrowserScreen';
import Browser2 from './src/Browser2Screen';
import TextView from './src/TextViewScreen';
import Ratification from './src/RatificationScreen';

console.reportErrorsAsExceptions = false;

const AppNavigator = createStackNavigator(
  {
    Home,
    Books,
    Contact,
    Qamus,
    Nihongo,
    BookDetail,
    Tamim,
    NewsAr,
    NewsJp,
    ViewFeed,
    Certification,
    Attache,
    Toiawase,
    Student,
    StudyJapan,
    Bunkabu,
    Browser2,
    Browser,
    TextView,
    Ratification,
  },
  {
    navigationOptions: {
      headerTitleStyle: {
        ...Styles.arabicBold,
        fontWeight: undefined,
        color: 'green',
        textAlign: Platform.OS == 'ios' ? 'center' : 'right',
      },
      headerStyle: { backgroundColor: '#F3EFD2' },
      headerTintColor: 'green',
    },
  }
);

export default () => (
  <Root>
    <AppNavigator />
  </Root>
);
