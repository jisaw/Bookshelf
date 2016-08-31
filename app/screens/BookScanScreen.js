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
import HeadingTitle from '../components/HeadingTitle'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

class BookScanScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.navigator)
    var book = this.props.book
    return (
      <ViewContainer>
      <StatusBarBackground />
      <HeadingTitle title="Scan A Book"/>
      <View style={styles.mainView}>

        <TouchableOpacity onPress={() => this.props.navigator.pop()} >
          <Icon name="chevron-left" size={30} color={"red"} style={styles.popButton}/>
        </TouchableOpacity>
      </View>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({

  mainView:{
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    height: 1000,
    backgroundColor: "cornsilk",
  },
  popButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
});

module.exports = BookScanScreen
