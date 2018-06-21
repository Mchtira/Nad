import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Slide4 from './components/Slide4.js'
import Slide3 from './components/Slide3.js'
import Slide2 from './components/Slide2.js'
import Slide1 from './components/Slide1.js'
import { Font } from 'expo'
import { Text } from 'react-native'

const RootStack = createStackNavigator(
  {
    Slide1: Slide1,
    Slide2: Slide2,
    Slide3: Slide3,
    Slide4: Slide4,
  },
  {
    initialRouteName: 'Slide4',
    headerMode: 'none',
  }
)

export default class App extends React.Component {
  
  state = {
    loading : true,
  }

  async componentWillMount() {
    await Font.loadAsync({
      'archive': require('./font/Archive.otf'),
      'american': require('./font/american.ttf'),
    })

    this.setState({
      loading: false
   }) 
  }

  render() {
    return  this.state.loading ? <Text>loading..</Text> : <RootStack />
  }
}