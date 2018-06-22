import React from 'react'
import { Text, View, Button, ImageBackground, Image } from 'react-native'
import styles from '../styles.js'

class Exposition1 extends React.Component {

  render() {
    return (
      <ImageBackground source= {require('../pictures/visiteAudio–1.png')} style={styles.backgroundImage}>
      </ImageBackground>
    )
  }
}

export default Exposition1