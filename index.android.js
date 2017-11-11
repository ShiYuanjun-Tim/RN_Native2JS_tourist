/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ListView,
    Alert,
    Modal,
    BackAndroid,
    DrawerLayoutAndroid,
    SwipeableListView,
    TouchableOpacity,
    Button,
    RecyclerViewBackedScrollView,
    ViewPagerAndroid
} from "react-native";
import OrderList from "./js/OrderList";
import GoodsTable from "./js/GoodsTable";
import InputModal from "./js/InputModal";
const {width:W}=Dimensions.get("window")


export type Item={
    date:string,
    person:string,
    order:string,
    desc:string,
    phone:string,
    buyWhat:string,
    inPrice:number,
    marketPrice:number,
    outPrice:number,
    packs:number
}
export default class TimsApp extends Component {


    constructor(props) {
        super(props)
        this._overrideBackPressForDrawerLayout = false;
        //for the list of trades

        // var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            // dataSource: ds.cloneWithRows(['row 1', 'row 2']),
            input:false
        };
    }


    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', this._handleBackButtonPress);
    }


    _handleBackButtonPress = () => {
        if (this._overrideBackPressForDrawerLayout) {
            // This hack is necessary because drawer layout provides an imperative API
            // with open and close methods. This code would be cleaner if the drawer
            // layout provided an `isOpen` prop and allowed us to pass a `onDrawerClose` handler.
            this.drawer && this.drawer.closeDrawer();
            return true;
        }
        return false;
    }


    render() {

        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <InputModal/>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                style={{flex:1}}
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={() => navigationView}
                ref={(drawer) => { this.drawer = drawer; }}
                onDrawerOpen={() => {
                  this._overrideBackPressForDrawerLayout = true;
                }}
                onDrawerClose={() => {
                  this._overrideBackPressForDrawerLayout = false;
                }}
            >

                <ViewPagerAndroid style={{flex:1,backgroundColor:"red"}}
                                  initialPage={0}>
                    <View style={styles.pageStyle}>
                        <GoodsTable/>
                    </View>
                    <View style={styles.pageStyle}>
                        <OrderList/>
                    </View>


                </ViewPagerAndroid>

            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    thumb: {
        width: 64,
        height: 64,
    },
    text: {
        flex: 1,
    },
    pageStyle: {
        alignItems: 'center',
    }
});


AppRegistry.registerComponent('TimsApp', () => TimsApp);
