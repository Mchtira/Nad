import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground, Image, TouchableHighlight } from 'react-native'
import { P, H } from './Basics'
import styles from '../styles.js'

class Jeu2 extends React.Component {

  render() {  
    return ( 
      <ImageBackground source= {require('../pictures/Etape1.png')} style={styles.backgroundImage}>
        <TouchableHighlight onPress={()=> { this.props.navigation.navigate('Home') }} style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Image
            source={require('../pictures/returnHomeBtn.png')} style={{ marginTop: 30, marginRight: 15, height: 35, width: 35, resizeMode: 'contain' }}
            />
        </TouchableHighlight> 
      </ImageBackground>
    )
  }
}

export default Jeu2