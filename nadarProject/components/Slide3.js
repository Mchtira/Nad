import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground, Image } from 'react-native'
import { P, H } from './Basics'


const styles = StyleSheet.create({
  txt: {
    fontFamily: 'mekouille'
  },
  wrapper: {
    marginLeft: 50
  },
  backgroundImage: {
      flex: 1,
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end', // centré verticalement 
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50
  },
  nadarName: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'mekouille'
  },
  redBanner: {
    backgroundColor: '#CA474D',
    width: 280,
    marginTop: 40,
  },
  bnfLogo: {
    marginTop: 20,
  },
  date: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: 'white',
    fontFamily: 'mekouille'

  },
  title: {
    display: 'flex',
    flexDirection: 'row',
  },
  blackBlock: {
    marginTop: 30,
    backgroundColor: 'black',
    marginRight: 50,
    height: 180,
    padding: 10,
    borderColor: 'white',
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 4
  }

})

class Slide3 extends React.Component {


  render() {
    return (
      <ImageBackground source= {require('../logo/bg_nadar3.png')} style={styles.backgroundImage}>
        <View></View>
        <H>`UN JEU POUR LES 
        AVENTURIER`</H>
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
        title='SUIVANT'/>
      </ImageBackground>
    )
  }
}

export default Slide3

