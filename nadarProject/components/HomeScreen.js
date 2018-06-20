import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native'

const styles = StyleSheet.create({
  backgroundImage: {
      flex: 1,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground source= {require('../pictures/background1.png')} style={styles.backgroundImage}>
        <View style={styles.view}>
          <Text>Home Screen</Text>
          <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      </ImageBackground>
    )
  }
}

export default HomeScreen