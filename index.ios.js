/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet
} from 'react-native';
import BookIndexScreen from './app/screens/BookIndexScreen'
import BookShowScreen from './app/screens/BookShowScreen'

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


class Bookshelf extends Component {
_renderScene(route, navigator) {
  var globalNavigatorProps = { navigator }

  switch(route.ident) {
    case "BookIndex":
      return (
        <BookIndexScreen
          {...globalNavigatorProps} books={books}/>
      )

    case "BookShow":
      return (
        <BookShowScreen
        {...globalNavigatorProps}
        book={route.book} />
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
        initialRoute={{ident: "BookIndex"}}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene} />
    )
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Bookshelf', () => Bookshelf);
