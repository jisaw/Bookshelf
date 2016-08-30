/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TabBarIOS } from 'react-native';
import BookIndexScreen from './app/screens/BookIndexScreen'
import BookShowScreen from './app/screens/BookShowScreen'
import AppNavigator from './app/navigation/AppNavigator'
import Icon from 'react-native-vector-icons/FontAwesome'

class Bookshelf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: "myLibrary"
    }
  }
  render() {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}>

        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === "myLibrary"}
          title={'My Library'}
          iconName="list"
          onPress={() => this.setState({selectedTab: "myLibrary"})}>
          <AppNavigator
            initialRoute={{ident: "BookIndex"}}/>
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === "loanedBooks"}
          title={'Loaned Books'}
          iconName="dollar"
          onPress={() => this.setState({selectedTab: "loanedBooks"})}>
          <AppNavigator
            initialRoute={{ident: "BookIndex"}}/>
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === "scanBook"}
          title={'Scan Book'}
          iconName="barcode"
          onPress={() => this.setState({selectedTab: "scanBook"})}>
          <AppNavigator
            initialRoute={{ident: "BookShow",
                            book: {title: "Love In The City", author: "Ellen Pao", yearPublished: 1972}}}/>
        </Icon.TabBarItemIOS>

      </TabBarIOS>
    )
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Bookshelf', () => Bookshelf);
