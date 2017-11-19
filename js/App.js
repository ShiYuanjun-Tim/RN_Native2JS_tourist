/**
 * Created by syjmac on 2017/11/12.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text, ListView, ScrollView,Button,
	View, Dimensions, NavigatorIOS,NativeModules
} from 'react-native';
import FirstStep from "./FirstStep"
import CallJS from "./CallJS"


export default class TimsApp extends Component {
	
	constructor() {
		super();
	}
	
	 
	
	
	render() {
		return (
			<View style={[{flex:1,backgroundColor:"pink",justifyContent:"flex-start"} ]}>
				<FirstStep></FirstStep>
				
			</View>
		);
	}
}

AppRegistry.registerComponent('TimsApp', () => TimsApp);


const styles = StyleSheet.create({
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
