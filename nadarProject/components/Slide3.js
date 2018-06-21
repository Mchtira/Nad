import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground, Image } from 'react-native'
import { P, H } from './Basics.js'
import styles from '../styles.js'

class Slide3 extends React.Component {


  render() {
    return (
      <ImageBackground source= {require('../logo/bg_nadar3.png')} style={styles.backgroundImage}>
        <Image source={require('../pictures/Arrow_Left.png')} />
        <View></View>
        <H>UN JEU POUR LES 
        AVENTURIER</H>
        <View>
          <P>Avant l'exposition, nous vous</P>
          <P>proposons un jeu immersif en</P>
          <P>3 étapes avec des surprises à la clé !</P>
        </View>
        <View>
          <P>Plus vous faites d'étapes plus</P>
          <P>l'expérience au musée sera complète.</P>
        </View>
        <Button 
        color='#CA474D'
        title='SUIVANT'
        onPress={() => this.props.navigation.navigate('Slide4')}
        />
      </ImageBackground>
    )
  }
}

export default Slide3

