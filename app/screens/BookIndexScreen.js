import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Navigator
} from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

class BookIndexScreen extends Component {
  constructor(props) {
    super(props)
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
       bookDataSource: dataSource.cloneWithRows(props.books)
    }
  }
  render() {
    console.log(this.props.navigator)
    return (
      <ViewContainer>
      <StatusBarBackground />
        <ListView
          style={styles.bookListView}
          dataSource={this.state.bookDataSource}
          renderRow={(book) => { return this._renderBookRow(book)}} />
      </ViewContainer>
    )
  }

  _renderBookRow(book) {
    return (
      <TouchableOpacity style={styles.bookRow} onPress={(event) => this._navigateToBookShow(book)}>
        <Text style={styles.bookTitle}>{book.title}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" size={20} style={styles.booksMoreIcon} />
      </TouchableOpacity>
    )
  }

  _navigateToBookShow(book) {
    this.props.navigator.push({
      ident: "BookShow",
      book: book,
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  bookRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10
  },
  bookTitle: {
    fontSize: 20
  },
  booksMoreIcon: {
    color: "orange",
    height: 20,
    width: 20,
  },
  bookListView: {
    marginTop: 100,
    flex: 1,
    height: 587
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = BookIndexScreen
