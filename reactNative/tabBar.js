'use strict';

var React = require('react-native');
var TestApp = require('./TestApp.js');

var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var systemIconTypes = ['bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated'];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'favorites'
    };
  },

  render: function() {
    return (
      <TabBarIOS
        style={[styles.view7Tabbarios8]}
        >
        <TabBarIOS.Item 
        systemIcon='favorites'
        selected={this.state.selectedTab === 'favorites'}
        onPress={() => {
          this.setState({
            selectedTab: 'favorites',
          });
        }}>
        <TestApp />
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='most-recent'
        selected={this.state.selectedTab === 'most-recent'}
        onPress={() => {
          this.setState({
            selectedTab: 'most-recent',
          });
        }}>
        <Bio />
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='search'
        selected={this.state.selectedTab === 'search'}
        onPress={() => {
          this.setState({
            selectedTab: 'search',
          });
        }}>
        <MapPage />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
    view7Tabbarios8:{
        paddingTop: 18,
        paddingBottom: 20,
    }, 
});
