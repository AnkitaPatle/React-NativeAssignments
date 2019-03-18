import * as React from 'react';
import { View, StyleSheet, Dimensions, Image, Text, TouchableOpacity,TextInput } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import MyProfileRoute from './myProfile'
import PostsRoute from './posts'
import LogoutRoute from './logout'
 
export default class Dashboard extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'MyProfile', title: 'MyProfile' },
      { key: 'Posts', title: 'Posts' },
      { key: 'Logout', title: 'Logout' },
    ],
  };
 
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          MyProfile: MyProfileRoute,
          Posts: PostsRoute,
          Logout: LogoutRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}
