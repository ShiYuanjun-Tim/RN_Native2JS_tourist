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
	StyleSheet,
	Text,Button,DeviceEventEmitter,
	View, Dimensions, NavigatorIOS,NativeModules
} from 'react-native';




export default class ToastExample extends Component {
	
	constructor() {
		super();
	}
	
	
	
	
	show=()=>{
		let ToastSamp = NativeModules.ToastSamp;
		let {LONG,SHORT} = ToastSamp;
		ToastSamp.show("call exposed methods from Native module ",LONG)
	}
	
	
	callbackSamp=()=>{
		let ToastSamp = NativeModules.ToastSamp;
		 ToastSamp.callbackInv(function (message) {
			 alert(message)
		 })
	}
	
	promiseSamp=()=>{
		let ToastSamp = NativeModules.ToastSamp;
		 ToastSamp.promiseInv().then(arr=>{
		 	alert(JSON.stringify( arr))
		 })
	}
	
	sendEvent=()=>{
		NativeModules.ToastSamp.sendEvent();
	}
	componentWillMount(){
		DeviceEventEmitter.addListener("shiyuanjunEvent",function (data) {
			alert(data)
		})
	}
	
	render() {
		return (
			<View style={[{flex:1,backgroundColor:"silver",justifyContent:"flex-start"} ]}>
				<Text style={[ { fontSize:20}]}>ToastSamp Show</Text>
				<Button onPress={this.show} title={"call exposed toast show methods from Native module"}/>
				<Button onPress={this.callbackSamp} color={"orange"} title={"pass Callback to Native module"}/>
				<Button onPress={this.promiseSamp} color="lightblue" title={"promise call from Native module"}/>
				<Button onPress={this.sendEvent} color="#323223" title={" send event from Native module "}/>
			
			
			</View>
		);
	}
}


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
