import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground, Image, TextInput } from 'react-native'
import { P, H } from './Basics'
import styles from '../styles.js'

class Slide5 extends React.Component {

  constructor() {
    super()
      this.state = { 
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
  }

  render() {
    return (
      <ImageBackground source= {require('../pictures/filtre_bg.png')} style={styles.backgroundImage}>
        <View style={{marginTop: 100, flex: 1, flexDirection: 'column', alignItems:'center' }}>
          <H> CREATION DE COMPTE </H>
          <TextInput
            editable = {true}
            maxLength = {40}
            style={ [styles.textInput, {marginTop: 50, color: 'white'}] }
            placeholder= 'Alexandre'
            placeholderTextColor = 'white'
            onChangeText={(firstName) => this.setState({firstName})}
            value={this.state.firstName} 
          />
          <TextInput
            editable = {true}
            maxLength = {40}
            style={ [styles.textInput, {color: 'white'}] }
            placeholder= 'Dumas'
            placeholderTextColor = 'white'
            onChangeText={(lastName) => this.setState({lastName})}
            value={this.state.lastName} 
          />
         <TextInput
            editable = {true}
            maxLength = {40}
            style={ [styles.textInput, {color: 'white'}] }
            placeholder="montecristo@gotmail.fr"
            placeholderTextColor = "white"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email} 
          />
        <TextInput
            editable = {true}
            maxLength = {40}
            style={ [styles.textInput, {color: 'white'}] }
            placeholderTextColor = "white"
            placeholder="*******"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password} 
            secureTextEntry = {true}
          />
        </View>
        <View style={styles.btn}>
          <Button 
            color='#000000'
            title='CREER SON COMPTE'
            onPress={() => this.props.navigation.navigate('Slide6')}
          />
        </View>
      </ImageBackground>
    )
  }
}

export default Slide5

