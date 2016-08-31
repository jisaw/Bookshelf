'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import BookIndexScreen from '../screens/BookIndexScreen'
import BookShowScreen from '../screens/BookShowScreen'
import BookLoansScreen from '../screens/BookLoansScreen'
import BookScanScreen from '../screens/BookScanScreen'


const books = [
  {title: "To Kill a Snake", author: "F Scott Fitzgerald", yearPublished: 1998},
  {title: "A BigStorm", author: "Larry Marshall", yearPublished: 2004},
  {title: "Love In The City", author: "Ellen Pao", yearPublished: 1972},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013},
  {title: "A Long Goodbye", author: "Teresa Thatcher", yearPublished: 2013}
]


class AppNavigator extends Component {
_renderScene(route, navigator) {
  var globalNavigatorProps = { navigator }

  switch(route.ident) {
    case "BookIndex":
      return (
        <BookIndexScreen
          {...globalNavigatorProps}
          books={books}/>
      )

    case "BookShow":
      return (
        <BookShowScreen
        {...globalNavigatorProps}
        book={route.book} />
      )
    case "BookLoans":
            return (
              <BookLoansScreen
              {...globalNavigatorProps}
              books={books}/>
            )
    case "BookScan":
      return (
        <BookScanScreen
        {...globalNavigatorProps}/>
      )
      
    default:
    return (
      <Text>{"You messed something up"}</Text>
    )
  }
}

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} />
    )
  }
}

const styles = StyleSheet.create({

});


module.exports = AppNavigator
