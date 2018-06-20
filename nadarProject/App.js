import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DetailsScreen from './components/DetailsScreen'
import HomeScreen from './components/HomeScreen.js'


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
