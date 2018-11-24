
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </View>
        <View style={[styles.boxContainer, {
          flexDirection: 'row'
        }]}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </View>
        <View style={[styles.boxContainer, {
          justifyContent: 'space-evenly'
        }]}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </View>
        <View style={[styles.boxContainer,{
          alignItems:'center'
        }]}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </View>
        <View style={styles.boxContainer}>
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
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    paddingTop: 30,
    paddingBottom: 30
  },
  boxContainer: {
    backgroundColor: 'white',
    height: 180,
    width: 180
  },
  box1: {
    backgroundColor: 'orange',
    width: 50,
    height: 50
  },
  box2: {
    backgroundColor: 'red',
    width: 50,
    height: 50
  },
  box3: {
    backgroundColor: 'black',
    width: 50,
    height: 50
  }
});
