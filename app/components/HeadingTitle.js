'use strict'

import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class HeadingTitle extends Component {
  render() {
    return (
      <View style={[styles.headingTitle, this.props.style]}>
        <Text style={styles.headingText}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  headingTitle: {
    height: 80,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },

  headingText: {
    fontSize: 30,
    fontWeight: "bold"
  }
})


module.exports = HeadingTitle
