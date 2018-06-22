import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground, Image, TouchableHighlight } from 'react-native'
import { P, H } from './Basics'
import styles from '../styles.js'

class Slide2 extends React.Component {

  render() {
    const { goBack } = this.props.navigation
    return (
      <ImageBackground source= {require('../logo/bg_nadar2.png')} style={styles.backgroundImage}>
      <TouchableHighlight onPress={() => goBack()} title="Go back" style={{marginBottom: 30, width: 120, height: 60 }}>
        <Image source={require('../pictures/Arrow_Left.png')} style={{ marginTop: 30, marginLeft: 20 }}/>
      </TouchableHighlight>
      <Text style={styles.redLine}></Text>
          <View style={{ marginBottom: 30, marginLeft: 50 }}>
            <H style={{color: 'white', fontSize: 30, marginLeft: 50 }}>PARTICIPEZ</H>
            <H style={{color: 'white', fontSize: 30, marginLeft: 50 }}>A L'EXPERIENCE !</H>
          </View>
          <View>
            <P style={{color: 'white', marginLeft: 50 }}>Découvrez une exposition unique.</P>
            <P style={{color: 'white', marginLeft: 50 }}>De l’histoire de la famille Nadar</P>
            <P style={{color: 'white', marginLeft: 50 }}>jusqu’à une immersion totale dans</P>
            <P style={{color: 'white', marginLeft: 50 }}>leurs vie et les oeuvres.</P>
          </View>
          <View style={styles.btn}>
            <Button 
              color='#CA474D'
              title='SUIVANT'
              onPress={() => this.props.navigation.navigate('Slide3')}
              />
          </View>
      </ImageBackground>
    )
  }
}

export default Slide2