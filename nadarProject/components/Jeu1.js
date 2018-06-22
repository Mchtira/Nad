import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground, Image, TextInput, TouchableHighlight } from 'react-native'
import { P, H } from './Basics'
import styles from '../styles.js'

class Jeu1 extends React.Component {

  render() {  
    return ( 
      <ImageBackground source= {require('../pictures/JEUONE.png')} style={[styles.backgroundImage]}>
        <View style={{flex: 1, flexDirection: 'row'}} >
          <TouchableHighlight onPress={()=> { this.props.navigation.navigate('Jeu2') }}>
            <View style={{ marginTop: 80, height: 120, width: 420}}></View>
          </TouchableHighlight> 
          <TouchableHighlight onPress={()=> { this.props.navigation.navigate('Home') }} style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Image
            source={require('../pictures/returnHomeBtn.png')} style={{ marginTop: 30, marginRight: 15, height: 35, width: 35, resizeMode: 'contain' }}
          />
          </TouchableHighlight> 
        </View>
      </ImageBackground>
    )
  }
}

export default Jeu1 