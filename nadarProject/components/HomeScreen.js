import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native'

const styles = StyleSheet.create({
  backgroundImage: {
      flex: 1,
  },
  btn: {
    flex: 1,
    alignItems: 'center', //centré horizontalement
    justifyContent: 'flex-end', // centré verticalement 
  },
  title: {
    color: 'white',
    fontSize: 60,
  },
  redBanner: {
    backgroundColor: '#CA474D',
    width: 280,
    marginTop: 40,
  }
})

class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground source= {require('../pictures/background1.png')} style={styles.backgroundImage}>
        <View style={styles.redBanner}>
          <Text style={styles.title}>NADAR</Text>
        </View>
        <View style={styles.btn}>
          <Button 
            color='#CA474D'
            title='Go to Details'
            onPress={() => this.props.navigation.navigate('Details')}
            />
        </View>
      </ImageBackground>
    )
  }
}

export default HomeScreen