import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Slide2 from './components/Slide2.js'
import Slide1 from './components/Slide1.js'
import CameraExample from './components/camera.js'
import store from './Store.js'
import { Font } from 'expo'
import { Text } from 'react-native'
 


const RootStack = createStackNavigator(
  {
    Slide1: Slide1,
    Slide2: Slide2,
    Slide3: Slide3
  },
  {
    initialRouteName: 'Slide1',
    headerMode: 'none',
  }
)

export default class App extends React.Component {
  
  state = {
    loading : true,
  }

  async componentWillMount() {
    await Font.loadAsync({
      'mekouille': require('./font/Archive.otf')
    })
   this.setState({
      loading: false
   }) 
  }

  render() {
    return  this.state.loading ? <Text>loading..</Text> : <RootStack />
  }
}