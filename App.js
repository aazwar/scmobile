/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Styles from './src/Styles';
import Home from './src/HomeScreen';
import Contact from './src/ContactScreen';
import Books from './src/books';
import BookDetail from './src/books/detail';
import Nihongo from './src/nihongo';
import Qamus from './src/qamus';
import Tamim from './src/feed/Tamim';
import NewsAr from './src/feed/NewsAr';
import NewsJp from './src/feed/NewsJp';
import Certification from './src/CertificationScreen';
import Attache from './src/AttacheScreen';
import ViewFeed from './src/feed/ViewFeed';
import Toiawase from './src/ToiawaseScreen';
import Student from './src/StudentScreen';
import StudyJapan from './src/StudyJapanScreen';
import Browser from './src/BrowserScreen';
import Browser2 from './src/Browser2Screen';

export default createStackNavigator(
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
    Browser2,
    Browser
  },
  {
    navigationOptions: {
      headerTitleStyle: { ...Styles.arabicBold, fontWeight: undefined },
    },
  }
);
