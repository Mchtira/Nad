import React from 'react'
import { Text, View, Button, ImageBackground, Image, TouchableHighlight } from 'react-native'
import styles from '../styles.js'

class Exposition1 extends React.Component {

  render() {
    return (
      <ImageBackground source= {require('../logo/NANAR.png')} style={styles.backgroundImage}>
      <TouchableHighlight onPress={()=> { this.props.navigation.navigate('Home') }} style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Image
        source={require('../pictures/returnHomeBtn.png')} style={{ marginTop: 30, marginRight: 15, height: 35, width: 35, resizeMode: 'contain' }}
        />
      </TouchableHighlight> 
      <View style={styles.btn}>
        <Button 
          color='#CA474D'
          title='SUIVANT'
          onPress={() => this.props.navigation.navigate('Video')} 
          />
      </View>
      </ImageBackground>
    )
  }
}

export default Exposition1