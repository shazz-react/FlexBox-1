import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import BaseStylePropClass from "./BaseStylePropClass";

export default class AlignItems extends BaseStylePropClass {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.boxContainer, { alignItems: 'flex-start' }]}>
                    <View style={styles.box1} />
                    <View style={styles.box2} />
                    <View style={styles.box3} />
                </View>
                <View style={[styles.boxContainer, { alignItems: 'flex-end' }]}>
                    <View style={styles.box1} />
                    <View style={styles.box2} />
                    <View style={styles.box3} />
                </View>
                <View style={[styles.boxContainer, { alignItems: 'center' }]}>
                    <View style={styles.box1} />
                    <View style={styles.box2} />
                    <View style={styles.box3} />
                </View>
                <View style={[styles.boxContainer, { alignItems: 'stretch' }]}>
                    <View style={{backgroundColor: 'aqua', height:30}} />
                    <View style={{backgroundColor: 'lightgreen', height:30}} />
                    <View style={{backgroundColor: 'black', height:30}} />
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
        justifyContent: 'flex-start',
        alignContent: 'center'
    },
    boxContainer: {
        backgroundColor: 'white',
        height: 177,
        width: 177,
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