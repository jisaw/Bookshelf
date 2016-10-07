import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
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
    var bookBackgroundColor
    switch(this.props.book.yearPublished) {
      case 1998:
        bookBackgroundColor = "coral"
        break
      case 2013:
        bookBackgroundColor = "wheat"
        break
      case 1972:
        bookBackgroundColor = "lightslategrey"
        break
      case 2004:
        bookBackgroundColor = "seagreen"
        break
    }

    console.log(this.props.navigator)
    var book = this.props.book
    return (
      <View style={styles.mainView}>
      <StatusBarBackground />
      <View style={styles.dataView}>
        <Text style={styles.bookTitle}>{book.title}</Text>
        <Text style={styles.bookAuthor}>Author: {book.author}</Text>
        <Text style={styles.bookYearPublished}>Published: {book.yearPublished}</Text>
        </View>
        <View style={styles.popView}>
        <TouchableOpacity onPress={() => this.props.navigator.pop()} >
          <Icon name="chevron-left" size={30} color={"red"} style={styles.popButton}/>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  mainView:{
    flex: 1,
    backgroundColor: "cornsilk"
  },

  bookTitle: {
    marginTop: 20,
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  dataView : {
    flex: 0.8,
  },
  bookAuthor: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  bookYearPublished: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  popView: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row"
  },
  popButton: {
    textAlign: "center",
    marginTop: 20
  }
});

module.exports = BookShowScreen
