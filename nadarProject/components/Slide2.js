import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground, Image } from 'react-native'

class Slide2 extends React.Component {
  
  render() {
    return (
      <ImageBackground source= {require('../pictures/background1.png')} style={styles.backgroundImage}>
          <View style={{marginTop: 10}}>
            <View style={styles.title}>
              <Text style={styles.date}> octobre 2018</Text>
              <Text style={styles.date}> février 2019</Text>
            </View>
          </View>
          <View style={styles.blackBlock}>
            <Text style={{color: 'white', fontSize: 30 }}>PARTICIPEZ</Text>
            <Text style={{color: 'white', fontSize: 30 }}>A L'EXPERIENCE !</Text>
          </View>
          <View style={styles.btn}>
            <Button 
              color='#CA474D'
              title='DECOUVRIR'
              onPress={() => this.props.navigation.navigate('Slide3')}
              />
          </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create ({
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
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
  },
})

export default Slide2