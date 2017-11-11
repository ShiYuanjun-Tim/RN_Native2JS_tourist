/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, ListView, ScrollView,
    View, Dimensions, NavigatorIOS
} from 'react-native';
import StateMachine from "javascript-state-machine"

const W = Dimensions.get("window");
console.log(W)


const styles = StyleSheet.create({
    bb: {borderWidth: 1, borderColor: 'black', borderStyle: "solid"},
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue',
    },
    header: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'steelblue',
        color: 'white',
        fontWeight: 'bold',
    },
    welcome: {
        flex: 1,
    },
    instructions: {
        flex: 1,
        color: '#333333',
        marginBottom: 5,
    },
});


export default class TimsApp extends Component {

    constructor() {
        super();
    }


    render() {
        return (
            <View style={[{flex:1}, styles.bb]}>
                <Text style={[styles.bb,{position:"relative",top:20 }]}>sdfsfsfsfs</Text>
                <View style={[ styles.bb]}></View>
                <View style={[{backgroundColor:"blue"},styles.bb]}></View>
            </View>
        );
    }
}

AppRegistry.registerComponent('TimsApp', () => TimsApp);
