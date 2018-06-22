import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground, Image, TouchableHighlight } from 'react-native'
import { P, H } from './Basics.js'
import styles from '../styles.js'

class Slide3 extends React.Component {

  render() {
    const { goBack } = this.props.navigation
    return (
      <ImageBackground source= {require('../logo/bg_nadar3.png')} style={styles.backgroundImage}>
      <TouchableHighlight onPress={() => goBack()} title="Go back" style={{marginBottom: 30, width: 120, height: 60 }}>
        <Image source={require('../pictures/Arrow_Left.png')} style={{ marginTop: 30, marginLeft: 20 }}/>
      </TouchableHighlight>
      <Text style={styles.redLine}></Text>
        <View></View>
        <View>
          <P style={{color: 'white', marginLeft: 50 }}>Avant l'exposition, nous vous</P>
          <P style={{color: 'white', marginLeft: 50 }}>propoijnijnijnsons un jeu immersif en</P>
          <P style={{color: 'white', marginLeft: 50 }}>3 étapes avec des surprises à la clé !</P>
        </View>
        <View>
          <P style={{color: 'white', marginLeft: 50 }}>Plus vous faites d'étapes plus</P>
          <P style={{color: 'white', marginLeft: 50 }}>l'expérience au musée sera complète.</P>
        </View>
        <View style={styles.btn}>
          <Button 
            color='#CA474D'
            title='SUIVANT'
            onPress={() => this.props.navigation.navigate('Slide4')}
            />
        </View>

      </ImageBackground>
    )
  }
}

export default Slide3
