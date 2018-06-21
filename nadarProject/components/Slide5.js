import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground, Image, TextInput } from 'react-native'
import { P, H } from './Basics'
import styles from '../styles.js'

class Slide5 extends React.Component {

  render() {
    return (
      <ImageBackground source= {require('../logo/bg_nadar3.png')} style={styles.backgroundImage}>
        <TextInput
        text= 'Useless Multiline Placeholder'
        editable = {true}
        maxLength = {40}
        />
      </ImageBackground>
    )
  }
}

export default Slide5

