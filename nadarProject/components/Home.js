import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground, Image, TextInput, TouchableHighlight } from 'react-native'
import { P, H } from './Basics'
import styles from '../styles.js'

class Home extends React.Component {
  render() {
    return (
      <ImageBackground source= {require('../pictures/home.png')} style={styles.backgroundImage}>
        <TouchableHighlight onPress={()=> { this.props.navigation.navigate('Jeu1') }}>
          <View style={{ height: 350, width: 360 }}></View>
        </TouchableHighlight> 
        <TouchableHighlight onPress={()=> { this.props.navigation.navigate('Exposition1') }}>
          <View style={{ height: 350, width: 360 }}></View>
        </TouchableHighlight> 
      </ImageBackground>
    )
  }
}

export default Home
