import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground, Image } from 'react-native'

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

class HomeScreen extends React.Component {


  render() {
    return (
      <ImageBackground source= {require('../pictures/background1.png')} style={styles.backgroundImage}>
        <View style={styles.redBanner}>
            <Text style={styles.nadarName}>NADAR</Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.bnfLogo}>
            <Image source={require('../logo/bnf.png')} />
          </View>
          <View style={{marginTop: 10}}>
            <View style={styles.title}>
              <Text style={styles.date} style={{color: '#CA474D', fontSize:20 }}>16</Text>
              <Text style={styles.date}> octobre 2018</Text>
            </View>
            <View style={styles.title}>
              <Text style={styles.date} style={{color: '#CA474D', fontSize:20 }} >3</Text>
              <Text style={styles.date}> février 2019</Text>
            </View>
          </View>
          <View style={styles.blackBlock}>
            <Text style={{color: 'white', fontSize: 30, fontFamily: 'mekouille'}}>LES NADAR</Text>
            <Text style={{color: 'white', fontSize: 30, fontFamily: 'mekouille' }}>PAR LES NADAR</Text>
            <Text style={{color: '#AA8962', fontSize: 17, fontFamily: 'mekouille' }}>Une légende familiale</Text>
            <Text style={{color: '#AA8962', fontSize: 17, fontFamily: 'mekouille' }}>à l'origine d'un siècle</Text>
            <Text style={{color: '#AA8962', fontSize: 17, fontFamily: 'mekouille' }}>de photographie</Text>
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