import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Slide2 from './components/Slide2'
import Slide1 from './components/Slide1'

const RootStack = createStackNavigator(
  {
    Slide1: Slide1,
    Slide2: Slide2,
  },
  {
    initialRouteName: 'Slide1',
    headerMode: 'none',
    navigationOption: {
      // headerVisible: false
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}