import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground, Image } from 'react-native'
import { P, H } from './Basics'
import styles from '../styles.js'

class HomeScreen extends React.Component {

  render() {
    return (
      <ImageBackground source= {require('../pictures/background1.png')} style={styles.backgroundImage}>
        <View style={styles.redBanner}>
            <Text style={styles.nadarName}>NADAR</Text>
        </View>
          <View style={styles.bnfLogo}>
            <Image source={require('../logo/bnfLogo.png')}/>
          </View>
        <View style={styles.wrapper}>
          <View style={{marginTop: 10}}>
            <View style={styles.title}>
              <Text style={styles.date} style={{color: '#CA474D', fontSize:20 }}>16 </Text>
              <Text style={styles.date}>octobre 2018</Text>
            </View>
            <View style={styles.title}>
              <Text style={styles.date} style={{color: '#CA474D', fontSize:20 }} >3</Text>
              <Text style={styles.date}> février 2019</Text>
            </View>
          </View>
          <View style={styles.blackBlock}>
            <H>LES NADAR</H>
            <H style={{marginBottom: 50}}>PAR LES NADAR</H>
            <P style={{marginTop: 20}}>Une légende familiale</P>
            <P>à l'origine d'un siècle</P>
            <P>de photographie</P>
          </View>
        </View>
          <View style={styles.btn}>
            <Button 
              color='#CA474D'
              title='DECOUVRIR'
              onPress={() => this.props.navigation.navigate('Slide2')}
              />
          </View>
      </ImageBackground>
    )
  }
}

export default HomeScreen