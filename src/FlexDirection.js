import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class FlexDirection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </View>
        <View style={[styles.boxContainer, { flexDirection: 'column-reverse' }]}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </View>
        <View style={[styles.boxContainer, { flexDirection: 'row' }]}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </View>
        <View style={[styles.boxContainer,{ flexDirection: 'row-reverse' }]}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  },
  boxContainer: {
    backgroundColor: 'white',
    height: 170,
    width: 170,
    margin: 5
  },
  box1: {
    backgroundColor: 'aqua',
    width: 30,
    height: 30
  },
  box2: {
    backgroundColor: 'lightgreen',
    width: 30,
    height: 30
  },
  box3: {
    backgroundColor: 'black',
    width: 30,
    height: 30
  }
});