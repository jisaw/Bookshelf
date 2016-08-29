import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
} from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

class BookShowScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.navigator)
    var book = this.props.book
    return (
      <ViewContainer>
      <StatusBarBackground style={{backgroundColor: "skyblue"}} />
        <Text style={styles.bookTitle}>{book.title}</Text>
        <Text style={styles.bookAuthor}>{book.author}</Text>
        <Text style={styles.bookYearPublished}>{book.yearPublished}</Text>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  bookTitle: {

  },

  bookAuthor: {

  },

  bookYearPublished: {

  }
});

module.exports = BookShowScreen
