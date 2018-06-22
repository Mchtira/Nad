import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Home from './components/Home.js'
import TakePic from './components/camera.js'
import Slide5 from './components/Slide5.js'
import Slide4 from './components/Slide4.js'
import Slide3 from './components/Slide3.js'
import Slide2 from './components/Slide2.js'
import Slide1 from './components/Slide1.js'
import Jeu1 from './components/Jeu1.js'
import Jeu2 from './components/Jeu2.js'
import Exposition1 from './components/Exposition1.js'
import AnimationScreen from  './components/AnimationScreen'
import { Font } from 'expo'
import { Text } from 'react-native'

const RootStack = createStackNavigator(
  {
    Home: Home,
    Slide1: Slide1,
    Slide2: Slide2,
    Slide3: Slide3,
    Slide4: Slide4,
    Slide5: Slide5,
    Exposition1: Exposition1,
    Jeu1: Jeu1,
    Jeu2: Jeu2,
    Camera: TakePic,
    Video: AnimationScreen
  },
  {
    initialRouteName: 'Home',
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