'use strict';

var React = require('react-native');

var ListView = require('./components/ListView');
var MapView = require('./components/MapView');
var ScrollView = require('./components/ScrollView');
var SliderIOS = require('./components/SliderIOS');
var SwitchIOS = require('./components/SwitchIOS');


var {
  Image,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

module.exports = React.createClass({
    render: function() {
        return (
          <View>
            <View style={[styles.view1]}>
                <Text 
                	style={[styles.view1Navbar6]}>
                	Cooper's Friends
                </Text>
            </View>
            <View style={[styles.view2]}>
                <ScrollView 
                dataSource={['https://scontent-lga1-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/1069194_2523046039889_1801474618_n.jpg?oh=e3a4cf4b3483c78a114e709cfdcac9cc&amp;oe=567D3E03', 'http://ak-hdl.buzzfed.com/static/enhanced/webdr02/2013/4/18/0/enhanced-buzz-11179-1366259657-8.jpg', 'http://www.oldyelladogranch.com/puppies.jpg', 'http://www.sellcell.com/blog/wp-content/uploads/2014/03/dog-apps.jpg', 'http://editorial.designtaxi.com/news-dogs280314/1.jpg']}
                style={[styles.view2Scrollview5]}>
                </ScrollView>
            </View>
          </View>
        );
    }
})


var styles = StyleSheet.create({
      view1:{
      }, 
      view2:{
      }, 
      view3:{
          height: NaN,
      }, 
      view2Scrollview5:{
          width: 375,
          height: 375,
      }, 
      view1Navbar6:{
          textAlign: 'center',
          fontSize: 23,
          color: '#a6fba9',
          backgroundColor: '#5e5e5e',
          paddingTop: 39,
          paddingBottom: 25,
          width: 375,
          height: 136.25,
      }, 
      view7Tabbarios8:{
          paddingTop: 18,
          paddingBottom: 20,
      }, 
})

AppRegistry.registerComponent('reactNative', () => reactNative);

