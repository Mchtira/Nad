import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground, Image } from 'react-native'
import { P, H } from './Basics'
import styles from '../styles.js'

class Slide4 extends React.Component {

  render() {
    return (
      <ImageBackground source= {require('../logo/bg_nadar4.png')} style={styles.backgroundImage}>
       <View style={[styles.bgRed, {marginTop: 50, marginLeft: 25, paddingLeft: 5, width: 145}]}><H>3 ETAPES</H></View>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View style={[styles.inline, {marginTop: 100}]}><View><P style={[styles.red, {fontFamily: 'archive', marginLeft: 25}]}>1.</P></View><View><P style={styles.white}>Découvrez le lieu de</P><P style={styles.white}>naissance de Nadar</P></View></View>
          <View style={styles.inline}><View><P style={[styles.red, {fontFamily: 'archive'}]}>2.</P></View><View><P style={styles.white}>Découvrez comment</P><P style={styles.white}>est née le flash !</P></View></View>
          <View style={styles.inline}><View><P style={[styles.red, {fontFamily: 'archive'}]}>3.</P></View><View><P style={styles.white}>Découvrez la</P><P style={styles.white}>première photo en vue aérienne</P></View></View>
        </View>
        <View style={styles.btn}>
          <Button 
          color='#CA474D'
          title='SUIVANT'
          onPress={() => this.props.navigation.navigate('Slide5')}
          />
        </View>


      </ImageBackground>
    )
  }
}

export default Slide4