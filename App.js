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

import Home from './src/HomeScreen';
import Contact from './src/ContactScreen';
import Books from './src/books';
import BookDetail from './src/books/detail';
import Nihongo from './src/nihongo';
import Qamus from './src/qamus';
import Emergency from './src/emergency';
import Tamim from './src/tamim';
import News from './src/news';

export default createStackNavigator({
  Home,
  Books,
  Contact,
  Qamus,
  Nihongo,
  BookDetail,
  Emergency,
  Tamim,
  News,
});
