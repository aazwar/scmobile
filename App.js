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
import News from './src/feed/News';
import ViewFeed from './src/feed/ViewFeed';

export default createStackNavigator(
  {
    Home,
    Books,
    Contact,
    Qamus,
    Nihongo,
    BookDetail,
    Tamim,
    News,
    ViewFeed,
  },
  {
    navigationOptions: {
      headerTitleStyle: { ...Styles.arabicBold, fontWeight: undefined },
    },
  }
);
