
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import FlexDirection from "./src/FlexDirection";
import JustifyContent from "./src/JustifyContent";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlexDirection />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});